.PHONY: install
install:
	go mod tidy

.PHONY: check
check:
ifeq ($(OS),Windows_NT)
	go test ./...
else
	@which wget >/dev/null || (echo "Error: wget required. Install with 'brew install wget' or 'apt-get install wget'"; exit 1)
	@which bc >/dev/null || (echo "Error: bc required for the coverage gate. Install with 'brew install bc' or 'apt-get install bc'"; exit 1)
	@wget -O lint-project.sh https://raw.githubusercontent.com/moov-io/infra/master/go/lint-project.sh
	@chmod +x ./lint-project.sh
	COVER_THRESHOLD=60.0 ./lint-project.sh
endif

.PHONY: bench
bench:
	go test . -count=6 -cpu=2 -run '^$$' -bench '^Benchmark' -benchmem > output.raw.txt
	python3 scripts/bench-median.py output.raw.txt | tee output.txt
