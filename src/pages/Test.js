import card_image from '../image/00_1.png';

export default function Test () {
    function onDropEvent(e) { //1
        e.preventDefault();
        console.log(e.target);
        const data = e.dataTransfer.getData('text');
        // console.log('get data values');
        // console.log(data);
        e.target.appendChild(document.getElementById(data));
    }
    function onDragOver(e) { //2
        e.preventDefault();
    }
    function onDragStart(e) {
        console.log('set data value');
        console.log(e);
        e.dataTransfer.setData('text', e.target.id);
    }
    return(
        
        <div style = { { width : '1000px', height : '50vh' } }>
            <div onDrop = { onDropEvent } onDragOver = { onDragOver } style = { { width : '200px', height : '200px', float : 'left', backgroundColor : 'blue' } }>A</div>
            <img
                src = { card_image } 
                draggable = 'true'
                onDragStart={ onDragStart }
                id = 'testValue'
                width = '180'
                height = '180'
            />
            <div onDrop = { onDropEvent } onDragOver = { onDragOver } style = { { width : '300px', height : '200px', float : 'rigth', backgroundColor : 'red' } }>3</div>
        </div>
        
    );
}