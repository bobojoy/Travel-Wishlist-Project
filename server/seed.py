from app import app 
from models import db, Destination , Attraction , DestinationAttraction  
  
with app.app_context(): 
    
    
    # This will delete any existing rows
    # so you can run the seed file multiple times without having duplicate entries in your database
    
    
     
    print("Deleting data ...")
    Destination.query.delete()
    Attraction.query.delete() 
    DestinationAttraction.query.delete()
    
    print("Creating Destinations...")
    
    d1 = Destination(name="Maasai Mara National Reserve", country="Kenya",image_url="https://images.unsplash.com/photo-1623951578056-5082d34a9859?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hc2FpJTIwbWFyYXxlbnwwfHwwfHx8MA%3D%3D")  
    d2 = Destination(name="Santorini", country="Greece",  image_url="https://images.unsplash.com/photo-1661602715715-4db69e772aa3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbnRvcmluaSUyMGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D")  
    d3 = Destination(name="Diani Beach", country="Kenya", image_url="https://images.unsplash.com/photo-1664093671658-a2aac3a344a9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbmklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D")
    d4 = Destination(name="Machu Picchu", country="Peru", image_url="https://images.unsplash.com/photo-1703568092973-4192b759ed00?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaHUlMjBwaWNjaHV8ZW58MHx8MHx8fDA%")
    d5 = Destination(name="Great Wall of China", country="china", image_url="https://images.unsplash.com/photo-1653966138964-112d0b40833e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlYXR3YWxsb2ZjaGluYXxlbnwwfHwwfHx8MA%3D%3D")
    d6 = Destination(name="Mount Kenya" , country="Kenya", image_url="https://images.unsplash.com/photo-1658823201653-75f1ff511d02?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D")
    d7 = Destination(name="Sydney Opera House", country="Australia", image_url="https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3lkbmV5JTIwb3BlcmElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D")
    d8 = Destination(name="Amboseli National Park", country="Kenya", image_url="https://plus.unsplash.com/premium_photo-1661842568067-14ff7610f657?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1ib3NlbGklMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D")
    d9 = Destination(name="Eiffel Tower", country="France", image_url="https://plus.unsplash.com/premium_photo-1661963064037-cfcf2e10db2d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D")
    d10 = Destination(name="Lamu Island", country="kenya" , image_url="https://plus.unsplash.com/premium_photo-1673292359580-6debf0432b73?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFtdSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D")
    d11 = Destination(name="Grand Canyon", country= "United States", image_url="https://plus.unsplash.com/premium_photo-1669050701110-a5eb879f1b6a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8fDA%3D")
    d12 = Destination(name="Taj Mahal", country="India", image_url="https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D")
    d13 = Destination(name="Victoria Falls", country="Zimbabwe/Zambia", image_url="https://images.unsplash.com/photo-1678714001094-ba90abd57fec?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmljdG9yaWElMjBmYWxsc3xlbnwwfHwwfHx8MA%3D%3D")
    d14 = Destination(name="Pyramids of Giza", country="Egypt", image_url="https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHlyYW1pZHMlMjBvZiUyMGdpemF8ZW58MHx8MHx8fDA%3D")
    d15 = Destination(name="Banff National Park", country="Canada", image_url="https://images.unsplash.com/photo-1564846930470-4b034d717347?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZmYlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D")
    d16 = Destination(name="Lake Nakuru National Park", country="Kenya", image_url="https://plus.unsplash.com/premium_photo-1661826903386-4d5f7471152d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZSUyMG5ha3VydSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D")
    d17 = Destination(name="Samburu National Reserve", country="Kenya", image_url="https://plus.unsplash.com/premium_photo-1666756340142-3523bd857e35?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FtYnVydSUyMG5hdGlvbmFsJTIwcmVzZXJ2ZXxlbnwwfHwwfHx8MA%3D%3D")
    d18 = Destination(name="Hell's Gate National Park", country="Kenya", image_url="https://p lus.unsplash.com/premium_photo-1664115701437-2bd5849c2793?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVsbCdzJTIwZ2F0ZSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D")
    d19 = Destination(name="Tsavo National Park", country="Kenya", image_url="https://plus.unsplash.com/premium_photo-1664303575598-026ebb947a96?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNhdm8lMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D")
    d20 = Destination(name="Nairobi National Park", country="Kenya", image_url="https://plus.unsplash.com/premium_photo-1697729856847-ae499843242f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D")
    
    
    
    
    
    
    destinations = [d1 , d2 , d3 , d4 , d5 , d6 , d7 , d8 , d9 , d10 , d11 , d12 , d13 , d14 , d15 , d16 , d17 , d18 , d19 , d20]     
    
    
    print("Creating Attractions ...")  
    a1 = Attraction(description = "Famous for the Great Migration and rich wildlife, including lions, elephants, and cheetahs.")
    a2 = Attraction(description = "Known for its stunning sunsets, white-washed buildings, and crystal-clear waters.")
    a3 = Attraction(description = "A beautiful white-sand beach with clear waters, perfect for snorkeling and diving.")
    a4 = Attraction(description = "An ancient Incan city nestled in the Andes mountains, known for its archaeological significance.")
    a5 = Attraction(description = "An ancient world wonder, stretching over 13,000 miles with breathtaking views.")
    a6 = Attraction(description = "Africa's second-highest peak, offering scenic trekking routes and stunning views.")
    a7 = Attraction(description = "A world-renowned architectural marvel, located in the Sydney Harbour.")
    a8 = Attraction(description = "Known for its large elephant herds and breathtaking views of Mount Kilimanjaro.")
    a9 = Attraction(description = "An iconic symbol of Paris, offering stunning views of the city from its observation decks.")
    a10 = Attraction(description = "A UNESCO World Heritage Site with rich Swahili culture and historic architecture.")
    a11 = Attraction(description = "A natural wonder, known for its immense size and colorful landscape carved by the Colorado River.")
    a12 = Attraction(description = "A UNESCO World Heritage Site and symbol of love, known for its stunning white marble architecture.")
    a13 = Attraction(description = "One of the largest and most famous waterfalls in the world, located on the Zambezi River.")
    a14 = Attraction(description = "Ancient wonders of the world, located near Cairo, known for their historical significance and grandeur.")
    a15 = Attraction(description = "A beautiful national park in the Canadian Rockies, known for its stunning lakes, mountains, and wildlife.")
    a16 = Attraction(description = "Famous for its flamingo population and diverse bird species in a beautiful lakeside setting.")
    a17 = Attraction(description = "Home to unique wildlife species like the Grevy's zebra, reticulated giraffe, and Somali ostrich.")
    a18 = Attraction(description = "Offers hiking and rock climbing opportunities, along with geothermal features like hot springs.")
    a19 = Attraction(description = "One of the largest national parks in the world, known for its red elephants and diverse landscapes")
    a20 = Attraction(description = "A unique park located just outside Nairobi, home to rhinos, lions, and giraffes, with the city skyline in the background.")
    
    
    attractions = [a1 , a2 , a3 , a4 , a5 , a6 , a7 , a8 , a9 , a10 , a11 , a12 , a13 , a14 , a15 , a16 , a17 , a18 , a19 , a20]
    
    print("Creating DestinationAttraction ...")
    
    dr1 = DestinationAttraction(destination = d1, attraction = a1, rating = 5)
    dr2 = DestinationAttraction(destination = d2, attraction = a2, rating = 4)
    dr3 = DestinationAttraction(destination = d3, attraction = a3, rating = 3)
    dr4 = DestinationAttraction(destination = d4, attraction = a4, rating = 5)
    dr5 = DestinationAttraction(destination = d5, attraction = a5, rating = 3)
    dr6 = DestinationAttraction(destination = d6, attraction = a6, rating = 5)
    dr7 = DestinationAttraction(destination = d7, attraction = a7, rating = 1)
    dr8 = DestinationAttraction(destination = d8, attraction = a8, rating = 2)
    dr9 = DestinationAttraction(destination = d9, attraction = a9, rating = 3)
    dr10 = DestinationAttraction(destination = d10, attraction = a10, rating = 4)
    dr11 = DestinationAttraction(destination = d11, attraction = a11, rating = 5)
    dr12 = DestinationAttraction(destination = d12, attraction = a12, rating = 1)
    dr13 = DestinationAttraction(destination = d13, attraction = a13, rating = 2)
    dr14 = DestinationAttraction(destination = d14, attraction = a14, rating = 3)
    dr15 = DestinationAttraction(destination = d15, attraction = a15, rating = 2)
    dr16 = DestinationAttraction(destination = d16, attraction = a16, rating = 3)
    dr17 = DestinationAttraction(destination = d17, attraction = a17, rating = 2)
    dr18 = DestinationAttraction(destination = d18, attraction = a18, rating = 1)
    dr19 = DestinationAttraction(destination = d19, attraction = a19, rating = 3)
    dr20 = DestinationAttraction(destination = d20, attraction = a20, rating = 4)
    
    
    
    

    destinationAttractions = [dr1 , dr2 , dr3 , dr4 , dr5 , dr6 , dr7 , dr8 , dr9 , dr10 , dr11 , dr12 , dr13 , dr14 , dr15 , dr16 , dr17 ,  dr18 , dr19 , dr20]


    db.session.add_all(destinations)
    db.session.add_all(attractions)
    db.session.add_all(destinationAttractions)

    db.session.commit()

    print("Seeding done!")