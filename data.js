const movies = [
    { 
        title: 'John Wick', 
        genre: 'Action', 
        rating: 7.4,
        director: 'Chad Stahelski',
        year: 2014,
        description: 'An ex-hitman seeks vengeance for the loss of his beloved dog, a gift from his recently deceased wife.',
          image:"https://phantom-marca.unidadeditorial.es/f52994ebc3d804d996d090b81932fd38/resize/828/f/webp/assets/multimedia/imagenes/2024/08/17/17239306838954.jpg"
    },
    { 
        title: 'War', 
        genre: 'Action', 
        rating: 7.2,
        director: 'Siddharth Anand',
        year: 2019,
        description: 'An Indian soldier is assigned to eliminate his former mentor who has gone rogue.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QphgjxidCuTkkNkyX4ZYirFKwu6iw-FWqQ&s'
    },
    { 
        title: 'RRR', 
        genre: 'Action', 
        rating: 8.0,
        director: 'S. S. Rajamouli',
        year: 2022,
        description: 'A fictional story about two real-life Indian revolutionaries and their fight against the British Raj.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl8k-hrR2MjSBsKWvGBqA7XLy7iR9P2vvTA&s'
    
    },
    { 
        title: 'Farzand', 
        genre: 'Action', 
        rating: 8.2,
        director: 'Digpal Lanjekar',
        year: 2018,
        description: 'A historical Marathi film about Chhatrapati Shivaji Maharaj\'s brave soldiers.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyKMRe8III0geIhWEaHQEtJi0I9gsBTyRuA&s'
    },
    { 
        title: 'Edge of Tomorrow', 
        genre: 'Action', 
        rating: 7.9,
        director: 'Doug Liman',
        year: 2014,
        description: 'A soldier fighting aliens gets caught in a time loop of dying and returning to the start of the same battle.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh18t_Ne3UIufPYskoxtSfU-7Z8uA3W_c8nw&s'
    },
    { 
        title: 'Superbad', 
        genre: 'Comedy', 
        rating: 7.6,
        director: 'Greg Mottola',
        year: 2007,
        description: 'Two high school seniors try to solve their girls and alcohol problem before graduating.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdY-NOEE3qlCz_4WP5AN97oGdwzUJKm4FXQ&s'
    },
    { 
        title: 'Golmaal', 
        genre: 'Comedy', 
        rating: 7.2,
        director: 'Rohit Shetty',
        year: 2006,
        description: 'A comedy of errors involving four friends and a house they are staying in.',
        image:'https://static.toiimg.com/photo/msid-61142705/61142705.jpg?194982'
    },
    { 
        title: 'Super Machi', 
        genre: 'Comedy', 
        rating: 6.8,
        director: 'Palnati Surya Pratap',
        year: 2022,
        description: 'A comedy film about friendship and life\'s challenges.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPc134wjpZkEGwRGGV4mND0G0T9sgCwp1JA&s'
    },
    { 
        title: 'Balak Palak', 
        genre: 'Comedy', 
        rating: 8.0,
        director: 'Ravi Jadhav',
        year: 2013,
        description: 'A Marathi comedy-drama that explores adolescence and growing up.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9YzdTCvfVN7K_OvWYVK6H9zZtFGRgc__ow&s'
    },
    { 
        title: 'Deadpool', 
        genre: 'Comedy', 
        rating: 8.0,
        director: 'Tim Miller',
        year: 2016,
        description: 'A wisecracking mercenary gets experimented on and becomes immortal but severely disfigured.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHQ2oNpIBLkPaMSfMqrP191yYUs9YqZ8eYw&s'
    },
    { 
        title: 'Shawshank Redemption', 
        genre: 'Drama', 
        rating: 9.3,
        director: 'Frank Darabont',
        year: 1994,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7VywiAW6w-fhp5-v0CDJVCP0yr4m8phANw&s'
    },
    { 
        title: 'Dangal', 
        genre: 'Drama', 
        rating: 8.4,
        director: 'Nitesh Tiwari',
        year: 2016,
        description: 'The true story of Mahavir Singh Phogat, who trains his daughters to become world-class wrestlers.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaa93IsnM6pa7m8WINn9EOkYGzIg-adb39Lw&s'
    },
    { 
        title: 'Lucia', 
        genre: 'Drama', 
        rating: 8.0,
        director: 'Pawan Kumar',
        year: 2013,
        description: 'A complex Kannada film exploring dreams, reality, and identity.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJlPN_bucf4oYCh8KpXNWoQYsgzBko9MOPA&s'
    },
    { 
        title: 'Dry Day', 
        genre: 'Drama', 
        rating: 7.8,
        director: 'Sanjay Jadhav',
        year: 2023,
        description: 'A social drama about the challenges of implementing prohibition.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Bhb30yy6c1lGQt4gvRQ9SyqNBU8a2U6RVQ&s'
    },
    { 
        title: 'The Green Mile', 
        genre: 'Drama', 
        rating: 8.6,
        director: 'Frank Darabont',
        year: 1999,
        description: 'The story of a death row corrections officer who forms an unlikely bond with a prisoner with supernatural powers',
         image:'https://static.displate.com/857x1200/displate/2019-12-05/c47ef1c89574ccf28370e2c9b4e807ed_5417ef4a39a15870711c185c3c96e338.jpg'
        
    },
    { 
        title: 'Interstellar', 
        genre: 'Scientific', 
        rating: 8.6,
        director: 'Christopher Nolan',
        year: 2014,
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
       image:'https://cdn.europosters.eu/image/750/posters/interstellar-go-further-i23316.jpg'
    },
    { 
        title: 'RA.One', 
        genre: 'Scientific', 
        rating: 6.2,
        director: 'Anubhav Sinha',
        year: 2011,
        description: 'A video game developer creates a game with an intelligent antagonist that comes to life.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZ04IPAMy1MOLCgSELBf3yhz_h6BKwUreLw&s'
    },
    { 
        title: 'Robot', 
        genre: 'Scientific', 
        rating: 7.0,
        director: 'Shankar',
        year: 2010,
        description: 'A scientist creates a robot with sophisticated artificial intelligence.',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GuJ6_6l0r0-SyC6dYQfsVdWbrj626BIEbg&s'
    },
    { 
        title: 'Faster Fene', 
        genre: 'Scientific', 
        rating: 7.8,
        director: 'Aditya Sarpotdar',
        year: 2017,
        description: 'A clever young detective solves a complex scientific mystery.',
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKHFrKmas0TeCCBXewaIetFsu8R3Q-hyTAQ&s'
    },
    { 
        title: 'Ex Machina', 
        genre: 'Scientific', 
        rating: 7.7,
        director: 'Alex Garland',
        year: 2014,
        description: 'A programmer participates in a unique experiment involving artificial intelligence.',
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9VEeDxjmjMUH0Py4aLI841ImLa4hUwlr5g&s'
    }
];