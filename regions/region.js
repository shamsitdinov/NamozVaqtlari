export const regionTime = (region, id, bot) => {
    try {
        fetch(`${process.env.NAMOZ_API}${region}`)
            .then((res) => res.json())
            .then((data) => {
                bot.sendMessage(
                    `${id}`,
                    `         
 ${data.hijri_date.month}  oyining
 ${data.hijri_date.day} kuni

Viloyat : ${data.region} 
Sana : ${data.date}
Kun : ${data.weekday} 

Tong saharlik : ${data.times.tong_saharlik}
Quyosh chiqish : ${data.times.quyosh}
Peshin : ${data.times.peshin}
Asr : ${data.times.asr}
Shom Iftorlik : ${data.times.shom_iftor}
Hufton : ${data.times.hufton}


          `,
                    { parse_mode: 'markdown' }
                );
                console.log(data)
            });

    } catch (error) {
        console.log(error)
    }
}