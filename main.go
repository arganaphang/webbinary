package main

import (
	"embed"
	"io/fs"
	"net/http"
)

//go:embed all:static
var assets embed.FS

func main() {
	fileAssets, _ := fs.Sub(assets, "static")
	fs := http.FileServer(http.FS(fileAssets))
	http.Handle("/", http.StripPrefix("/", fs))
	http.ListenAndServe("0.0.0.0:8000", nil)
}
