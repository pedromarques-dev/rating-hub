package main

import (
	"fmt"
	"log"
	"net/http"
	"rating-hub/src/config"
	"rating-hub/src/database"
)

func main() {
	cfg := config.LoadConfig()

	database.Initialize(cfg)
	defer database.GetDB().Close()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Aplicação Rodando!")
	})

	serverAddr := fmt.Sprintf(":%s", cfg.ServerPort)
	log.Printf("Server running on port %s", cfg.ServerPort)
	log.Fatal(http.ListenAndServe(serverAddr, nil))

	fmt.Printf("Project")
}
