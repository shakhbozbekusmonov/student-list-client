import React, {Component} from 'react';

class Wrap extends Component {

    constructor(props) {
        super(props);
        this.state= {
            datas: [],
            selectedIndex: -1
        }
    }


    render() {

        const addDate = (event) => {
            event.preventDefault();

            let userName = event.target.userName.value;
            let surName  = event.target.surName.value;
            let birthDay = event.target.birthDay.value;
            let unvon    = event.target.unvon.value;

            event.target.reset();

            let newDate = {
                name: userName,
                surname: surName,
                birth: birthDay,
                unvon: unvon
            }

            if (this.state.selectedIndex >= 0){
                this.state.datas[this.state.selectedIndex] = newDate;
            } else {
                this.state.datas.push(newDate);
            }

            this.setState({
                datas: this.state.datas,
                selectedIndex: -1
            })
        }

        const deleteData = (index) => {
            this.state.datas.splice(index, 1);
            this.setState({
                datas: this.state.datas
            })
        }

        const editData = (index) => {
            this.setState({
                selectedIndex: index
            })
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card mt-5">
                                <div className="card-header text-center">
                                    <h4>Ma'lumot kiriting</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={addDate}>
                                        <input type="text" defaultValue={this.state.datas[this.state.selectedIndex]?.name} className="form-control" name="userName" placeholder="Username"/>

                                        <input type="text" defaultValue={this.state.datas[this.state.selectedIndex]?.surname} className="form-control mt-3" name="surName" placeholder="Surname"/>

                                        <input type="date" defaultValue={this.state.datas[this.state.selectedIndex]?.birth} className="form-control mt-3" name="birthDay"/>

                                        <select name="unvon" defaultValue={this.state.datas[this.state.selectedIndex]?.unvon} className="form-control mt-3">
                                            <option value="kontrakt">Kontrakt</option>
                                            <option value="grand">Grand</option>
                                        </select>

                                        <button type="submit" className="btn btn-success d-block mt-3 ml-auto">Add</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>№</th>
                                            <th>Ism Familiya</th>
                                            <th>Tug'ilgan sana</th>
                                            <th>O'qish turi</th>
                                            <th>Amal</th>
                                        </tr>
                                        </thead>
                                        {this.state.datas.map((item, index) => {
                                            return (
                                                <tbody>
                                                <tr>
                                                    <td>{(index + 1)}</td>
                                                    <td>{item.name + " " + item.surname}</td>
                                                    <td>{item.birth}</td>
                                                    <td>{item.unvon}</td>
                                                    <td className="d-flex justify-content-between align-items-center">
                                                        <button type="button" className="btn btn-primary" onClick={() => {editData(index)}}>Edit</button>
                                                        <button type="button" className="btn btn-danger"  onClick={() => {deleteData(index)}}>Delete</button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Wrap;