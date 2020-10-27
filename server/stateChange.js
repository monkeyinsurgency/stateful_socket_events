const ramdonBoolean = () => Math.random() >= 0.5;

module.exports = (data, socket) => {

    console.log(data)

};


module.exports = (data, socket) => {

    const selections = [];

    data.category.forEach(category => {
        category.subcat.forEach(subcat => {
            subcat.event.forEach(event => {
                event.selection.forEach(selection => {
                    const { id, price } = selection;
                    selections.push({
                        newPrice: Math.floor(Math.random() * 9) + 1,
                        price,
                        id
                    });
                });
            });
        });
    });

    selections.forEach(selection => socket.emit('price-update', selection));
};

