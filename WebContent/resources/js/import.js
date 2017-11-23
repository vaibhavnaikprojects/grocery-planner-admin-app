var productCategoriesRef=firebase.database().ref('Product Categories');
var productItemsRef=firebase.database().ref('Product Items');
jsonObject=JSON.parse('{"ProductCategories" :["Alcohol Drinks","Baby Products","Bakery","Beverages","Canned Foods","Car Care Products","Clothes","Coffee & Tea","Cosmetics","Dairy Products","Diet Foods","Electronic Products","Frozen","Grains and Pasta","House Cleaning Products","Kitchen","Newspapers","Office Supplies","Oils","Other","Personal Hygiene","Pet Supplies","Pharmacy","Preservatives","Seafoods"]}');
jsonProductItems=JSON.parse('{'+
		'"1": [ "Ale","Apple Cider","Beer","Brandy","Champagne","Cider","Cognac","Dry Wine","Eggnog","Filters","Flavored Beer","Flavored Vodka","Gin","Ginger Ale","Ginger Beer","Honey Beer","IPA","Lager","Liqueur","Liquor","Martini","Porter","Porto","Red Wine","Rolling Papers","Root Beer","Rose Wine","Rum","Semi-dry Wine","Semi-Sweet Wine","Sherry","Sparling Wine","Stout","Sweet Wine","Tequila","Tobacco","Vodka","Wheat Beer","Whisky","White Wine" ],'+
		'"2": [ "Baby Bath","Baby Dinner","Baby Food","Baby Formula","Baby Healing Ointment","Baby Milk","Baby Oil","Baby Powder","Baby Shampoo","Baby Wipes","Bed Mats","Diaper Bag","Diaper Rash cream","Diaper rash ointment","Diapers","Feeding Bottle","Gerber","Infant Formula","Nappies","Nasal Aspirator","Nurser","Pacifier","Pampers" ],'+
		'"3":[ "Apple Pie","Bagel","Baguette","Birthday Cake","Bread","Bread Buns","Bread Rolls","Bread rolls with seeds","Breadcrumbs","Brown Bread","Brownie","Bruschetta","Buns","Burger Buns","Butter Rolls","Cake Slice","Cheescake","Chocolate Cake","Ciabatta","Coffee Cake","Croissant","Croutons","Crumpets","Cupcakes","Donut","Dough","Flat Bread","Garlic Bread","Graham Bread","Grain Bread","Hamburger Buns","Hot Dog Buns","Macaroon Cookies","Matza","Muffins","Naan Bread","Oatnut Bread","Orowheat Bread","Pastry","Pie","Pita Bread","Rolls","Rye Bread","Sandwich Bread","Seed Bread","Ships Biscuit","Sliced Bread","Sweet Rolls","Taco Shells","Tiramisu Cake","Toast Bread","Tortilla Shells","Wheat Bread","White Bread","Whole Grain Bread","Whole Wheat Bread"],'+
		'"4":[ "7up","Apple Juice","Bottled Water","Coca Cola","Coconut Water","Coke Zero","Cola Zero","Cranberry Juice","Diet Coke","Dr Pepper","Energy Drink","Fruit Juice","Grape Juice","Grapefruit Juice","Hood Half and Half","Ice tea","Iced Coffee","Iced Tea","Istonic drink","Lemon Juice","Lemonade","Lime Juice","Mineral Water","Nectar","Orange Juice","Pepsi","Pineapple Juice","Pomegranate Juice","Prune Juice","Raspberry Syrup","Schweppes","Seltzer","Smoothies","Soda","Soda Water","Soft Drink","Sparling Water","Sprite","Tomato Juice","Tonic","Tonic Water","Vitamin Water" ],'+
		'"5":[ "Apple Cider Vinegar","Baked Beans","Balsamic Vinegar","Beef Broth","Beef Stew","Canned Carrots","Canned Cat Food","Canned Chicken","Canned Dog Food","Canned Fruit","Canned Green Beans","Canned Milk","Canned Pears","Canned Peas","Canned Pineapple","Canned Salmon","Canned Shrimp","Caramel Sauce","Chicken Broth","Chicken Chunks","Chocolate Syrup","Cider Vinegar","Cream of Chicken Soup","Cream of mushroom Soup","Dijon Mustard","Dried Mushrooms","Golden Syrup","Hazelnut Butter","Honey","Honey Mustard","Horseadish Cream","Icrecream Topping","Ketchup","Kidney Beans","Lentil Soup","Maple Syrup","Mayonnaise","Mushroom Soup","Mustard","Nutella","Pea Soup","Peanut Butter","Syryp","Tomato Soup","Vegetable Soup","Vinaigrette","Vinegar" ],'+
		'"6":[ "Car","Car Charger","Car Shampoo","Car Wash","Car Wax","Distilled Water","Motor oil","Screenwash" ],'+
		'"7":[ "Babygro","Bathing Suit","Belt","Blouse","Bodysuit","Bra","Cap","Cloths","Coat","Dress","Flip Flops","Gloves","Hosiery","Jacket","Jeans","Jockey Shorts","Leggins","Nylons","Pants","Pantyhose","Rain Coat","Rainboots","Robe","Sandals","Scarf","Shirt","shoes","shorts","skirt","Slippers","Sneakers","Socks","Stockings","Sunglasses","Sweater","Sweatshirt","Swimsuit","T-shirt","Tennis Shoes","trousers","Underpants" ],'+
		'"8":[ "Black Tea","Cappuccino","Chamomile Tea","Cocoa","Coffee","Coffee Beans","Creamer","Earl Grey","Earl Grey Tea","Fruit Tea","Green Tea","Ground Coffee","Herbal Tea","Hot Chocolate","Melissa Tea","Mint Tea","Nesquik","Red Tea","Tea","Tea Bags","Tisane" ],'+
		'"9":[ "After Shave Lotion","After-Sun Lotion","Anti-Wrinkle Cream","Antibacterial Soap","Antiperspirant","Bath Gel","Bath Salt","Blush","Body Lotion","Body Spray","Body Wash","Cleanser","Cologne","Comb","Concealer","Conditioner","Cosmetics","Cotton Buds","Dental Floss","Dentifrice","Deodrant","Eau de Toilette","Eye Shadow","Eyeliner","Face Cream","Face Lotion","Face Scrub","Face Soap","Face Wines","Facewash","Facial Cleanser","Feminine Wash","Floss","Foot Cream","Foundation","Gel","Hair Accessories","Hair color","Hair Conditioner","Hair dye","Hair Gel","Hair Spray","Hairbrush","Hand cream","Hand Sanitizer","Hand Soap","Handwash","Lip Balm","Lipstick","Lotion","Make-up Remover","Mascara","Micellar Water","Mousse","Mouthwash","Nail File","Nail Polish","Nail Polish Remover","Nails","Peeling","Perfume","Powder","Razor","Scrub","Shampoo","Shampoo & Conditioner","Shave cream","Shaver","Shaving Cream","Shaving Foam","Shaving Gel","Shower Gel","Silk","Soap","Soap bar","Sunscreen","Suntan Lotion","Suntan Spray","Toothbrush Heads" ],'+
		'"10":[ "Activia","American cheese","Babygel cheese","Blue cheese","Boiled eggs","Brie","Butter","Buttermilk","Butterscotch pudding","Camembert","Cheddar","Cheddar cheese","Cheese","Cheese spread","Cheese sticks","Chocolate milk","Chocolate pudding","Chocolate creamer","Condensed milk","Cottage cheese","Cream","Cream cheese","Cream cheese spread","Crème fraiche","Curd","Dairy","Dessert","Double cream","Drawn butter","Edam cheese","Egg product","Egg whites","Eggs","Evaporated milk","Feta","Feta cheese","Fromage frais","Fruit yogurt","Gralic butter","Gelatine snack","Ghee","Goat cheese","Goat milk","Gorgonzola","Gouda","Grated cheese","Greek yogurt","Gruyere","Havarti","Heavy cream","Jack cheese","Kefir","Mascarpone","Mexican cheese","Milk","Monterey jack","Mozzarella","Natural yogurt","Parmesan","Pepper jack cheese","Philadelphia","President","Processed cheese","Provolone cheese","Pudding","Quark","Rice pudding","Ricotta","Ricotta cheese","Sandwich cheese","Shredded cheese","Single cream","Skim milk","Sliced cheese","Smoothie","Sour cream","Swiss cheese","Unsalted butter","Whipping cream","Whole milk","Yoghurt" ],'+
		'"11":[ "Almond butter","Almond milk","Coconut milk","Lactose free milk","Protein bars","Protein powder","Rice milk","Soy milk","Soy yoghurt","Stevia","Tofu","Vanilla milk","Vegan sausage","Veggie burgers" ],'+
		'"12":[ "Alarm clock","Batteries","Batteries aa","Batteries aaa","Blender","Bulb","Camera","Cellphone","Charger","Clock","Computer","Crock pot","Dishwasher","Drill","Hair dryer","Radio","Scale","Tablet","Toaster" ],'+
		'"13":[ "Drumsticks","Freezies","French fries","French pastry","Fries","Frozen berries","Frozen blueberries","Frozen broccoli","Frozen cauliflower","Frozen chicken nuggets","Frozen corn","Frozen dumplings","Frozen fruit","Frozen mussels","Frozen peas","Frozen pizza","Frozen prawns","Frozen produce","Frozen risotto","Frozen seafood","Frozen spinach","Frozen strawberries","Frozen vegetable mix","Ice","Ice cream","Lasagne frozen","Meatballs","Pie shell","Pizza dough","Popsicles" ],'+
		'"14":[ "All purpose flour","Arborio rice","Au gratin potatoes","Barley","Barley flakes","Basmati rice","Black beans","Bow tie pasta","Bran","Bread flour","Brown rice","Brown sugar","Buchwheat","Bran flakes","Bread flour","Cake flour","Caster sugar","Cereal","Color pasta","Coquillettes","Corn flakes","Corn flour","Corn starch","Corn bread","Corn flakes","Couscous","Egg noodies","Elbow pasta","Fiber","Fideos","Flaxseed","Flour","Granola","Grits","Groats","Jasmine rice","Lasagne pasta","Lentil beans","Linguini","Linseed","Long grain rice","Macaroni","Milk powder","Millet groats","Muesli","Noodle pasta","Nori","Oatmeal","Oatmeal squares","Oats","Paraboiled rice","Pasta","Penne","Penne pasta","Polenta","Potato starch","Powdered sugar","Quinoa","Ramen noodles","Rice","Rice cereal","Rice noodles","Risotto rice","Rolled oats","Rotini","Rye flour","Saccharin","Self rising flour","Shell pasta","Spaghetti","Spaghetti noodles","Spiral pasta","Starch","Sugar","Sugar cubes","Thai rice","Tortellini","Wheat flour","White rice","Whole grain pasta","Whole grain rice","Whole wheat flour" ],'+
		'"15":[ "Air freshner","Ammonia","Ant trap","Antibacterial wipes","Bathroom cleaner","Bin liners","Bleach","Bleacher","Bottle brush","Broom","Brush","Carpet cleaner","Carpet powder","Chlorine","Cleaner","Cleaning wipes","Clorox","Cordial","Cream cleaner","Dehumidifier","Descaler","Detergent","Dish detergent","Dish liquid","Dish soap","Dishwasher cleaner","Dishwasher detergent","Dishwasher liquid","Dishwasher salt","Dishwasher soap","Dishwasher tablets","Dishwashing liquid","Disinfecting wipes","Drain cleaner","Dryer sheets","Dusters","Fabric conditioner","Fabric freshener","Fabric softener","Floor cleaner","Floor polish","Glass cleaner","Insect repellent ","Insecticide","Laundry bag","Laundry detergent","Laundry liquid","Laundry soap","Mop","Oven cleaner","Plunger","Polish","Rubber gloves","Scrub sponge","Softener","Sponge cloth","Sponges","Spray","Stain remover","Sweeper","Toilet brush","Toilet cleaner","Toilet cleaning gel","Toilet rim block","Toilet seat","Tub & tile spray","Washing detergent","Washing liquid","Washing powder","Washing tablets","Window cleaner" ],'+
		'"16":[ "Air filter","Air freshener","Aluminium trays","Aluminium foil","Ant traps","Bags","Baking powder","Basket","Bath mat","Bed sheet","Bin bags","Blanket","Bottle","Bottle opener","Bottle stoppers","Bowls","Box","Briquets","Bucket","Bulbs","Cake pan","Can opener","Can trapper","Candles","Charcoal","Cheese grater","Cheese slicer","Cheese cloth","Chopsticks","Cling film","Cling wrap","Clothes hangers","Coffee filters","Colander","Compost bags","Container","Cookie cutter","Cooking bag","Corkscrew","Cups","Cutting board","Dish brush","Dish cloths","Dishes","Disposable cutlery","Dustpan","Egg beaters","Firelog","Flame log","Foil","Food wrap","Freezer wraps","Freezer pack bags","Frying pan","Garbage bags","Garbage can","Glasses","Grater","Greaseproof paper","Hangers","Heaters","Ice cube molds","Ice cube tray","Knife","Lamp","Laundry basket","Light bulbs","Lighter","Lunch bags","Mason jars","Matches","Measuring cups","Muffin pan","Pan","Paper bags","Paper bowls","Paper cups","Paper napkins","Paper plates","Parchment paper","Party cutlery","Peeler","Pie pan","Plant pot","Plastic bags","Plastic cups","Plastic foil","Plastic plates","Plastic spoons","Plastic wrap","Plates","Pot","Roasting pan","Rolling pin","Rubber gloves","Sandwich bags","Scissors","Scoops","Shower curtain","Shower head","Silverware","Skewers","Slow cooker liners","Soap dispenser","Spatula","Sponge","Spoons","Spray bottle","Storage bags","Strainer","Straws","Stand","Table cover","Teapot","Tin foil","Toilet brush","Toothpicks","Trash bags","Trash can","Travel cup","Turner","Vacuum bags","Waste bags","Water filter","Wax paper","Whisk","Wooden spoon","Wrapping paper","Zipper" ],'+
		'"17":[ "Book","Crossword","Newspaper","Tv guide" ],'+
		'"18":[ "Binder","Bobby pins","Calculator","Calendar","CDs","Crayons","DVDs","Glue","Gluestick","Ink","Markers","Notebook","Paper","Paper clips","Pen","Pencil","Pencil sharpener","Printer","Printer ink","Printer paper","Scotch tape","Stamps","Stapler","Super glue","Tape" ],'+
		'"19":[ "Butter spray","Canola oil","Coconut oil","Cooking oil","Cooking spray","Extra virgin olive oil","Fat","Fish oil","Flaxseed oil","Grapeseed oil","Gravy","Grease","Linseed oil","Margarine","Mustard oil","Oil","Olive","Peanut oil","Rice vinegar","Safflower oil","Seasame oil","Shortening","Sunflower oil" ],'+
		'"20":[ "Angel hair","Backpack","Balloons","Bed","Bedsheets","Bedding","Bike","Binoculars","Birthday card","Card","Carpet","Caulk","Chair","Chalk","Charcoal","Christmas cards","Cigarettes","Cotton wool","Curtains","Decorations","Desk","Duct tape","Ear plugs","Earrings","Envelopes","Fertilizer","Flask","Flowers","Gift bag","Gift card","Glue sticks","Greeting cards","Hammer","High heel insoles","Jewelry","Mattress","Paint","Paint brush","Paint roller","Patches","Pellets","Phone case","Photos","Picture frames","Pillow","Purse","Rake","Ribbon","Screws","Sheets","Shoe organiser","Shoe polish","Shoe rack","Shovel","Silicone","Sleeping bag","Stickers","Stove","Sunglasses","Tablle","Tennis balls","Tent","Toys","Umbrella","Wax" ],'+
		'"21":[ "Bath tissue","Bathroom tissue","Bubble bath","Carmex","Case for contact lenses","Cleansing cloths","Contact lens","Contact lens liquid","Contact solution","Cotton","Cotton balls","Cotton pads","Facial tissue","Feminine products","Foot spray","Hair remover","Hand towels","Kitchen towel","Moist wipes","Napkins","Pads","Pantiliners","Paper towel","Pocket tissues","Q-tips","Razor blades","Razors","Sanitary napkins","Sanitizer","Shavers","Spaghetti squash","Tampons","Tissue","Toilet paper","Toilet tissue","Toilet wipes","Toothbrush","Towels","Wet wipes" ],'+
		'"22":["Bird food","Bird seed","Bones","Cat food","Cat litter","Cat shampoo","Cat toy","Cat tray","Cat treats","Dog biscuits","Dog bones","Dog collar","Dog food","Dog shampoo","Dog toy","Dog treats","Fish food","Flea & tick powder","Flea & tick spray","Flea collar","Litter","Litter box","Litter tray","Pet food","Puppy food" ],'+
		'"23":[ "Alka seltzer","Ant baits","Antacid","Antidiarrheal","Aspirin","Band aids","Bandage","Biotin","Blister treatment","Bug spray","Calcium","Cod liver oil","Cold & flu relief","Condoms","Contact lenses","Cooling relief gel","Cough drops","Cough mixture","Cough syrup","Decognestant","Elastic band","Eye drops","Fever medicine","Fiber","First aid kit","First aid wrap","Folic acid","Hydrogen peroxide","Ibuprofen","Iodine","Iron pills","Magnesium","Melatonin","Multivitamin","Nasal spray","Nicroette","Pain medicine","Paracetamol","Potassium","Probiotics","Rubbing alcohol","Sore throat syrup","Syringes","Test strips","Throat strips","Vaseline","Vitamins","Wart remover" ],'+
		'"24":[ "Apple sauce","Apricot jam","Apricpt preserves","Artichoke hearts","Artichokehearts in water","Barrel pickles","Black olives","Blackberry jam","Blueberries in syrup","Canned black beans","Canned corn","Canned green beans","Canned mushrooms","Canned peaches","Canned pineapple","Canned pumpkin","Canned sweet baby corn","Canned sweet peas","Canned tomatoes","Canned vegetables","Canned white beans","Capers","Cocktail onions","Confiture","Cornichons","Diced tomatoes","Dill pickles","Fruit mix in syrup","Garbanzo beans","Garlic dills","Green olives","Jam","Kosher dills","Large olives","Marmalade","Olives","Orange marmalade","Pepperoncini","Pickles","Pineapples chunk in juice","Raspberry preserves","Red kidney beans","Strawberry jam","Tipsy olives","Tipsy onions","Tomato paste","Tomato puree","Tomato sauce" ],'+
		'"25":[ "Anchovies","Anchovy paste","Canned brisling","Canned fish","Canned herring","Canned mackerel","Canned sardines","Canned tuna","Carp","Catfish","Catfish fillet","Clams","Cod","Crab","Fish","Fish fillet","Fish fingers","Fish fry","Fish sticks","Gilt-head sea bream","Hake","Halibut","Herring","Herring fillets","Lobster","Mackerel","Mussels","Oysters","Perch","Plaice","Pollock","Prawns","Salmon","Salmon","Salmon fillet","Salmon steak","Sardines","Scallops","Seafood","Shrimp","Smoked fish","Smoked mackerel","Smoked salmon","Swordish fillet","Tilapia fillet","Trout","Tuna","Tuna chunks","Tuna in oil","Tuna in water","Yellowfin sole" ]'+
'}');
for(var i=0;i<jsonObject.ProductCategories.length;i++){
	var id=productCategoriesRef.push();
	var idKey=id.key;
	id.set({
		"Product Category": jsonObject.ProductCategories[i]
	});
	var productItems=productItemsRef.child(idKey);
	var k=(parseInt(i)+1).toString();
	var test=jsonProductItems[k];
	for(var j=0;j<test.length;j++){
		var productId=productItems.push();
		productId.set({
			"Product Item": test[j]
		});
	}
}
console.log("Import Successfully");