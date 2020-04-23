var CreateMyMeal = {
    getBreakfast : function () {
        let breakfastItems = ["Milk 🥛", "Bread-butter 🍞🧈 and Milk 🥛 ", "Bread-butter 🍞🧈 and Tea ☕️ ", "Bread-Jam 🍞 and Milk 🥛",
            "Pohe 🍙 and Tea ☕️", "Sandwich 🥪 and Milk🥛", "Paratha 🥞", "Oats 🍚", "Cookies🍪 with Tea☕️"];
        let setBreakfastItems = document.getElementById("myBreakfast");

        breakfastItems.map(element => {
            setBreakfastItems.innerText = breakfastItems[Math.floor(Math.random() * breakfastItems.length)];
        });
    },

    getLunch : function () {
        let lunchItems = ["Dal , Rice, Chappati 🍱", "Veg Rice 🍲, Salad 🥗"];
        let setLunchItems = document.getElementById("myLunch");

        lunchItems.map(element => {
            setLunchItems.innerText = lunchItems[Math.floor(Math.random() * lunchItems.length)];
        });
    },

    getSnacks : function () {
        let snacksItems = ["Sandwich 🥪 Tea ☕️", "Noodles 🍜 Coke🥤", "Chowmein🥡🥢", "Cookies🍪 with Tea☕️"];
        let setSnacksItem = document.getElementById("mySnacks");
        snacksItems.map(element => {
            setSnacksItem.innerText = snacksItems[Math.floor(Math.random() * snacksItems.length)];
        });
    },

    getDinner : function () {
        let dinnerItems = ["Dal , Rice, Chappati 🍱 Salad 🥗", "Veg Rice 🍲 Salad 🥗"];
        let setDinnerItem = document.getElementById("myDinner");
        dinnerItems.map(element => {
            myDinner.innerText = dinnerItems[Math.floor(Math.random() * dinnerItems.length)];
            this.getSweets();
        });
    },

    getSweets : function () {
        let sweetItems = ["Cupcake 🧁", "Pastry 🍰", "Ice-Lolly 🍡", "🍨Cup-icecream 🍧", "No Sweets for today"];
        let setSweetItem = document.getElementById("mySweets");

        sweetItems.map(element => {
            setSweetItem.innerText = sweetItems[Math.floor(Math.random() * sweetItems.length)];
        });
    },
};