const update = (state = { count: 0 }, action = {type: ''}) => {
   switch(action.type) {
      case 'UP'   : return Object.assign({}, state, {count: state.count + 1});
      case 'DOWN' : return Object.assign({}, state, {count: state.count - 1});
      default     : return state;
   }
};

let container = Redux.createStore(update);

const view = (m) => {
   const Increase = () => { container.dispatch({type: 'UP'})};
   const Decrease = () => { container.dispatch({type: 'DOWN'})};
   return (
      <div>
         <p>{m.count}</p>
         <button onClick={Increase}>UP</button>
         <button onClick={Decrease}>DOWN</button>
      </div>
   )
};

const render = () => {
   ReactDOM.render(
      view(container.getState()),
      document.getElementById('root')
   );
}

container.subscribe(render);

container.dispatch({type: ''});
