package database

import (
	"database/sql"
	"fmt"
	"log"
	"rating-hub/src/config"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Initialize(cfg *config.Config) {
	connectionString := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		cfg.DBHost,
		cfg.DBPort,
		cfg.DBUser,
		cfg.DBPassword,
		cfg.DBName,
	)

	var err error
	DB, err = sql.Open("postgres", connectionString)
	if err != nil {
		log.Fatalf("Erro ao conectar a base de dados: %v", err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatalf("Erro ao fazer ping a base de dados: %v", err)
	}

	log.Println("Sucesso! Conectado ao banco dedados")
}

func GetDB() *sql.DB {
	return DB
}
