package com.example.springboot;

import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Vector;

@RestController
@CrossOrigin
public class Controller {

    Vector<Book> all = new Vector<>();

    @GetMapping("/add")
    public void add() {
        this.all.add(new Book("https://source.unsplash.com/random?sig=" + Objects.toString(this.all.size() + 3),
                "meme2", this.all.size() + 3,
                "This is a generated description for book " + Objects.toString(this.all.size() + 3)));
        System.out.println(this.all);
    }

    @GetMapping("/books")
    @ResponseBody
    public Vector<Book> index(@RequestParam(required=false) String genre) {
        Vector<Book> res = new Vector<>();
        res.addAll(this.all);
        res.add(new Book("https://jrnlst.ru/sites/default/files/covers/cover_6.jpg",
                "meme1", 0, "Very interesting description"));
        System.out.println(Objects.isNull(genre));

        if (Objects.isNull(genre) || genre.equals("meme2")) {
            res.add(new Book("https://www.meme-arsenal.com/memes/2e4ff71c9ca7353202676b424d6189a3.jpg",
                    "meme2", 1, "It's super nice"));
        }
        if (Objects.isNull(genre) || genre.equals("meme1"))
            res.add(new Book("https://ememe.neocities.org/imagenes/inicio.jpg",
                    "meme1", 2, "Highly suggest to take a look"));

        return res;
    }

}