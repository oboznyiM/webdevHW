package com.example.springboot;

public class Book {
    String imageURL;
    final String genre;
    int id;
    final String description;
    final String title;

    public Book(String title, String imageURL, String genre, int id, String description) {
        this.title = title;
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
    public String getTitle() {return this.title; }

}
