# Contributing

Thanks for taking a look at bertlv. The easiest way to help is to improve the documentation or add tests around a case that surprised you.

## Development

This module requires Go 1.23.1 or later.

```sh
git clone https://github.com/moov-io/bertlv.git
cd bertlv
go test ./...
```

`make check` runs the Moov lint script and coverage gate. It needs `wget` and `bc`. Without `bc`, coverage can be reported as 0.0% and the check can still pass.

```sh
make check
```

Run the package examples and benchmarks with:

```sh
go test -run Example
make bench
```

Please send changes as a pull request against `master` with tests for any behavior change.
