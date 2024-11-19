set dotenv-load

default:
  @just --list

# Format Golang
format:
	gofumpt -l -w .
	goimports-reviser -rm-unused -set-alias ./...
	golines -w -m 120 *.go


build-web:
  rm -rf static
  rm -rf web/dist
  cd web; bun run build
  mv web/dist static

build-app:
  go build -o application ./main.go

run-app:
  ./application

dev:
  watchexec -r -c -e go -- just build-app run-app