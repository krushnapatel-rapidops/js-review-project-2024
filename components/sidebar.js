class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
    }
    getCellData(data) {
        return [
            {text:data.name , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }

}


