import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * 这里Audit 的audit 小写？
 */
// function Audit(age) {
//     if (age > 18) {
//         return <h1>成年人</h1>;
//     }
//     return <h1>未成年人</h1>
// }



// const Audit = React.createClass({
//     render: function() {
//         return (<h1>sd</h1>)
//     }
// });
function createMarkup() { return {__html: 'First &middot; Second'}; };





//let 
class Timer extends React.Component{
    constructor() {
        super();
        console.log('constructor')
        this.state = {
            // count: 0,
            // time: (new Date()).toLocaleTimeString()
            people:[{
                id:'1',
                name: 'zhangsan1'
            }, {
                id:'2',
                name: 'zhangsan2'
            },{
                id:'3',
                name: 'zhangsan3'
            }]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    //
    // static defaultProps ={
    //     age: 20
    // }

    // 如何进行props的类型检测
    //
    componentWillMount() {
        //
        // console.log('componentWillMount')
        // setInterval(() => {
        //     this.setState({
        //         count:1,
        //         color: '',
        //         time: (new Date()).toLocaleTimeString()
        //     });
        // }, 1000)
    }
    componentDidMount() {
        // var el = document.getElementById('sd');
        // el.style.color="red"
        console.log('componentDidMount')
        
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
        
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
        

    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
        
        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleClick = (event) => {
        //alert(this.state.count);

        // event.stopPropagation();
        // event.preventDefault();

        //let type = event.type;
        // setTimeout(() => {
        //     console.log(event.type);
        // }, 0)
        // console.log(event.type);

        //
        //var el = document.getElementById('content');
        // this.contentRef.style.color = "red";
        // this.setState({
        //     color:'red'
        // });
        let people = [...this.state.people];
        people[1].name += ' haha';
        
        this.setState({
            people: people
        });
        
    }
    render() {
        return (<div onClick={this.handleClick}> 
                {/*<div style={{color: this.state.color}} ref={(content) => {this.contentRef = content;}}>
                    {this.state.time}
                </div>  */}
                <ul>
                {this.state.people.map((item, i) => {
                    return <Person key={item.id} item = {item}  content={item.name}></Person>
                })}
                </ul>
            </div>);
    }
}

class Person extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lastItem : "",
            name:""
        }
    }
    componentWillMount(){
        // 引用类型改变
        const cloneItem = JSON.parse(JSON.stringify(this.props.item))
        this.setState({
            lastItem:cloneItem,
            name:this.props.item.name
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        // return nextProps.content !== this.props.content;
        return nextProps.item.name !== this.state.name;
    }
    render() {
        console.log('render' + this.props.item.id);
        return <li>{this.props.item.name}</li>
    }
}

// Audit.defaultProps = {
//     age: 20
//   };

/**
 * 
 * 
 * <div data-title=""></div>
 * 
 */

ReactDOM.render(<Timer color={"blue"} />, document.getElementById('root'));
registerServiceWorker();
