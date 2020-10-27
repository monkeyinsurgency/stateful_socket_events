module.exports = (data, socket) => {

    const selections = [];

    data.category.forEach(category => {
        category.subcat.forEach(subcat => {
            subcat.event.forEach(event => {
                event.selection.forEach(selection => {
                    selections.push({
                        newPrice: Math.floor(Math.random() * 9) + 1,
                        id : selection.price
                    });
                });
            });
        });
    });

    selections.forEach(selection =>
        setTimeout(() => { socket.emit('selectionPriceUpdate', selection) }, 1000 * (Math.floor(Math.random() * 15) + 1))
    );

};

