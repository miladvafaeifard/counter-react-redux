const update = (state = { count: 0 }, action) => {
   switch(action) {
      case 'UP'   : return Object.assign({}, state, {count: state.count + 1});
      case 'DOWN' : return Object.assign({}, state, {count: state.count - 1});
      default     : return state;
   }
};


const createStore = (reducer) => {
   let internalState;
   let handlers = [];
   return {
      dispatch: (action) => {
         internalState = reducer(internalState, action);
         handlers.map(handler => handler());
      },
      getState: () => internalState,
      subscribe: (handler) => {
         handlers.push(handler);
      },
   }
};


let container = createStore(update);

const view = (m) => {
   const Increase = () => { container.dispatch('UP')};
   const Decrease = () => { container.dispatch('DOWN')};
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


container.dispatch();
