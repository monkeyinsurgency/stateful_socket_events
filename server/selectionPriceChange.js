module.exports = (data, socket) => {

    const selections = [];

    var precision = 100; // 2 decimals

    data.category.forEach(category => {
        category.subcat.forEach(subcat => {
            subcat.event.forEach(event => {
                event.selection.forEach(selection => {
                    selections.push({
                        newPrice: Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision),
                        id : selection.id
                    });
                });
            });
        });
    });

    selections.forEach(selection =>
        setTimeout(() => { socket.emit('selectionPriceUpdate', selection) }, 1000 * (Math.floor(Math.random() * 15) + 1))
    );

};

