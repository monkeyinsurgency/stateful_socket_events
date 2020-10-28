module.exports = (data, socket) => {

    const selections = [];

    data.category.forEach(category => {
        category.subcat.forEach(subcat => {
            subcat.event.forEach(event => {
                event.selection.forEach(selection => {
                    const { id } = selection;
                    selections.push({
                        active: Math.random() >= 0.5,
                        id
                    });
                });
            });
        });
    });

    selections.forEach(selection =>
        setTimeout(() => { socket.emit('selectionStateUpdate', selection) }, 1000 * (Math.floor(Math.random() * 25) + 1))
    );

};

