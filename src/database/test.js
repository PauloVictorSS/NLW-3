const Database = require("./db");
const saveOrphanage = require("./saveOrphanage")

Database.then(async (db) => {
    //insert datas into table
    await saveOrphanage(db,{
        name: "Lar dos meninos",
        about: "Presta assistência a crianças e 08 a 18 anos que se encontram em situação de risco ou vulnerabilidade social",
        whatsapp: "98125-5389",
        images: [
            "https://images.unsplash.com/photo-1509924603848-aca5e5f276d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",

            "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",

            "https://images.unsplash.com/photo-1588063765533-8c50d519194b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",

            "https://images.unsplash.com/flagged/photo-1571530765629-4efdab448a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",

            "https://images.unsplash.com/photo-1560796819-89ab1929cdd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",

            "https://images.unsplash.com/photo-1565843248736-8c41e6db117b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        ].toString,
        lat: "-22.8626586",
        lng: "-47.2146691",
        instructions: "Venha com vontade e muito amor para dar (Paciência também)",
        opening_hours: "Horário de visita das das 8h até as 18h",
        open_on_weekends: "0"
        
      })

    //select datas in the table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //select only a orphanage in the table with id
    const selectedOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(selectedOrphanage)
    
    //delete a specific orphanage
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})