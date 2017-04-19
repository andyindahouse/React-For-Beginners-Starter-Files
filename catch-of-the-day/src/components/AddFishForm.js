import React from 'react';

class AddFishForm extends React.Component {
    createFish(event) {
        event.preventDefault();
        console.log('make fish pls');
        const fish = {
            name: this.name,
            price: this.price,
            status: this.status,
            desc: this.desc,
            image: this.image
        };
        console.log(fish);
        this.props.addFish(fish);
        this.formFish.reset();
    }
    
    render() {
        return (
            <form ref={(input) => this.formFish = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Fish Name"/>
                <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
                <select ref={(input) => this.status = input}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea ref={(input) => this.desc = input} type="text" placeholder="Fish Desc">
                </textarea>
                <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}

AddFishForm.propTypes = {
    addFish: React.PropTypes.func.isRequired
};

export default AddFishForm;