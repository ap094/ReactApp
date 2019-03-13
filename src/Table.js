import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Job</th>
                <th scope="col">Function</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)} className="btn btn-danger">Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;  
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table className="table">
                <TableHeader />
                <TableBody 
                    characterData={characterData} 
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;