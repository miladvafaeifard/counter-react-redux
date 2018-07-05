const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
   INCREASE: () => dispatch({type: 'UP'}),
   DECREASE: () => dispatch({type: 'DOWN'}),
});

const update = (state = { count: 0 }, action = { type: '' }) => {
   switch(action.type) {
      case 'UP'   : return Object.assign({}, state, {count: state.count + 1});
      case 'DOWN' : return Object.assign({}, state, {count: state.count - 1});
      default     : return state;
   }
};

const Counter = ReactRedux.Connect(mapStateToProps, mapDispatchToProps)( props => {
   return (
      <div>
         <p>{props.count}</p>
         <button onClick={props.INCREASE}>UP</button>
         <button onClick={props.DECREASE}>DOWN</button>
      </div>
   )
};

ReactDOM.render(
   <ReactRedux.Provider store={Redux.createStore(update)}>
      <Counter />
   </ReactRedux.Provider>,
   document.getElementById('root')
);

