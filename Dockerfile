FROM golang:alpine as builder
WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
RUN go build -o application main.go

FROM alpine
COPY --from=builder /app/application /usr/bin/application
EXPOSE 8000
CMD application