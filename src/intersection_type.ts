type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: ()=> void
}
//intersection type
type UIWidget =  Draggable & Resizable;


let textBox:UIWidget ={
    drag: () => {},
    resize: () => {}
} 
