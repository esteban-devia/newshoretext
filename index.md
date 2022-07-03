<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">

    <title>Airline - Home</title>
</head>
<body class="container">
    <header class="container_content">
        <a href="#" class="header_logo">airline</a>
        <div class="menuMain">
            <div class="menuMain_lang">
                <label for="lang" class="text_base">en</label>
                <input type="checkbox" name="lang" id="lang">
            </div>
            <nav>
                <label for="ham" class="ham_menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <input type="checkbox" name="ham" id="ham">
                <ul class="header_nav_menu">
                    <li><a href="#" class="text_base active">Home</a></li>
                    <li><a href="#" class="text_base">About</a></li>
                    <li><a href="#" class="text_base">Destinations</a></li>
                    <li><a href="#" class="text_base">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section class="hero">
            <img src="imgs/plane.jpg" alt="">
            <div class="hero_text container_content">
                <h2>Visit Canada with prices from $800</h2>
                <p class="text_base">Prepare your bags and forget your worries<br>to start enjoying your holidays in this fantastic country</p>
                <a href="#" class="buttonRed">buy now</a>
            </div>
        </section>
        <section class="container_content offers">
            <div class="offers_title">
                <div class="offers_line"></div>
                <h1>Offers</h1>
            </div>
            <div class="offers_main">
                <div class="offers_cards_main">
                    <div class="offers_cards">
                        <div class="card">
                            <img src="imgs/moscow.jpg" alt="">
                            <div class="card_text">
                                <div>
                                    <p class="text_light">Trip to Moscow</p>
                                    <p class="card_more text_light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris. <a href="#" class="text_light">more</a></p>
                                </div>
                                <p class="card_price">Price $600,86</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="imgs/puerto-rico.jpg" alt="">
                            <div class="card_text">
                                <div>
                                    <p class="text_light">Trip to Puerto Rico</p>
                                    <p class="card_more text_light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris. <a href="#" class="text_light">more</a></p>
                                </div>
                                <p class="card_price">Price $600,86</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="imgs/honduras.jpg" alt="">
                            <div class="card_text">
                                <div>
                                    <p class="text_light">Trip to Honduras</p>
                                    <p class="card_more text_light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris. <a href="#" class="text_light">more</a></p>
                                </div>
                                <p class="card_price">Price $600,86</p>
                            </div>
                        </div>
                    </div>
                    <div class="offers_cards_destin">
                        <p class="text_light destination">destination</p>
                        <p>Chosen destination</p>
                    </div>
                </div>
                <div class="offers_menu">
                    <h2>Menu</h2>
                    <ul class="offers_menu_options">
                        <li><a href="" class="text_light">Check-in</a></li>
                        <li><a href="" class="text_light">Manage By Boocking</a></li>
                        <li><a href="" class="text_light">Search</a></li>
                        <li><a href="" class="text_light">Destinations</a></li>
                        <li><a href="" class="text_light">Members</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <h2>Follow us</h2>
        <div class="footer_social">
            <a href="#"><img src="imgs/facebook.svg" alt=""></a>
            <a href="#"><img src="imgs/instagram.svg" alt=""></a>
            <a href="#"><img src="imgs/twitter.svg" alt=""></a>
        </div>
        <nav class="footer_menu container_content">
            <div class="footer_menu_block">
                <div class="footer_menu_col about">
                    <p class="text_base">About</p>
                    <p class="footer_aboutUs">we want to help passengers to reach their destinations</p>
                </div>
                <div class="footer_menu_col">
                    <p class="text_base">Explore</p>
                    <ul>
                        <li><a href="#" class="text_base">Home</a></li>
                        <li><a href="#" class="text_base">Destinations</a></li>
                        <li><a href="#" class="text_base">About</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer_menu_block">
                <div class="footer_menu_col">
                    <p class="text_base">Information</p>
                    <ul>
                        <li><a href="#" class="text_base">More search</a></li>
                        <li><a href="#" class="text_base">Blog</a></li>
                        <li><a href="#" class="text_base">Testimonials</a></li>
                    </ul>
                </div>
                <div class="footer_menu_col">
                    <p class="text_base">Services</p>
                    <ul>
                        <li><a href="#" class="text_base">Manage My Boockings</a></li>
                        <li><a href="#" class="text_base">Check-in</a></li>
                        <li><a href="#" class="text_base">Hotel</a></li>
                        <li><a href="#" class="text_base">Cars</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </footer>
</body>
</html>