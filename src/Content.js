import ItemList from './ItemList.js';

const Content = ({items, handleCheck, handleDelete}) => {

    return (
        // This is called Fragment <></>
        <main>
            {(items.length !== 0) ? (
                <ItemList
                    items = {items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p>This list is empty</p>
            ) }
        </main>
    );
}

export default Content;