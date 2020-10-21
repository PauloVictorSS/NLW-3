const Database = require("./db");
const saveOrphanage = require("./saveOrphanage")

Database.then(async (db) => {
    //insert datas into table
    /*await saveOrphanage(db,{
        name: "Lar das meninas",
        about: "Presta assistência a crianças e 01 a 08 anos que se encontram em situação de risco ou vulnerabilidade social",
        whatsapp: "98123-4567",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80",

            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80",

            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

            "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",

            "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        ].toString(),
        lat: "-22.8636817",
        lng: "-47.2141752",
        instructions: "Venha com vontade e muito amor para dar (Paciência também)",
        opening_hours: "Horário de visita das das 8h até as 18h",
        open_on_weekends: "1"
      })*/

    //select datas in the table
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    //select only a orphanage in the table with id
    //const selectedOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(selectedOrphanage)
    
    //delete a specific orphanage
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
})