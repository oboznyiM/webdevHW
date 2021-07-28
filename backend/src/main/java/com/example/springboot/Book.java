package com.example.springboot;

public class Book {
    final String imageURL;
    final String genre;
    final int id;
    final String description;

    public Book(String imageURL, String genre, int id, String description) {
        this.imageURL = imageURL;
        this.genre = genre;
        this.id = id;
        this.description = description;
    }

    public String getImageURL() {
        return this.imageURL;
    }
    public String getGenre() { return this.genre; }
    public int getId() {return this.id;}
    public String getDescription() {return this.description; }
}
