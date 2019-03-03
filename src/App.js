import React, { Component } from 'react';
import './App.css';

// import  { Login}   from "./components/login/Login";

export default class App extends Component {

  state = {
      board: [
        [{border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}],
        [{border: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {border: true}],
        [{border: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {border: true}],
        [{border: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {black: true, blackPlayer: true}, {white: true}, {border: true}],
        [{border: true}, {white: true}, {black: true}, {white: true}, {black: true}, {white: true}, {black: true}, {white: true}, {black: true}, {border: true}],
        [{border: true}, {black: true}, {white: true}, {black: true}, {white: true}, {black: true}, {white: true}, {black: true}, {white: true}, {border: true}],
        [{border: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {border: true}],
        [{border: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {border: true}],
        [{border: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {white: true}, {black: true, whitePlayer: true}, {border: true}],
        [{border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}, {border: true}],
      ],
      first: true,
      second: false
      
  };


  move = (i, index) => {
    let {board, first, second} = this.state;
   
    console.log(i)
    console.log(index)
    if(second) {
    if(board[i][index].blackPlayer) {
      board.map((blocks, i) => blocks.map(block => {
        if(block.canMove || block.chosen) {
          block.canMove = false;
          block.chosen = false;
        }
      }))
      if(!board[i+1][index+1].border && !board[i+1][index-1].border && !board[i+1][index+1].blackPlayer && !board[i+1][index-1].blackPlayer) {
        if(!board[i+1][index+1].whitePlayer) {
          board[i][index].chosen = true;
          board[i+1][index+1].canMove = true;
        }
        if(!board[i+1][index-1].whitePlayer) {
          board[i][index].chosen = true;
          board[i+1][index-1].canMove = true;
        }
        if(board[i+1][index+1].whitePlayer) {
          if(!board[i+2][index+2].whitePlayer && !board[i+2][index+2].border && !board[i+2][index+2].blackPlayer) {
            board[i][index].chosen = true;
            board[i+2][index+2].canMove = true;
          }
        }
        if(board[i+1][index-1].whitePlayer) {
          if(!board[i+2][index-2].whitePlayer && !board[i+2][index-2].border && !board[i+2][index-2].blackPlayer) {
            board[i][index].chosen = true;
            board[i+2][index-2].canMove = true;
          }
        }
      }
      if(!board[i+1][index+1].border && board[i+1][index-1].border && !board[i+1][index+1].blackPlayer)   {
        board[i][index].chosen = true;
        
        if(board[i+1][index+1].whitePlayer) {
          if(!board[i+2][index+2].blackPlayer && !board[i+2][index+2].whitePlayer && !board[i+2][index+2].border) {
            board[i+2][index+2].canMove = true;
          }
        } else {
          
          board[i+1][index+1].canMove = true;
        }
      }
      if(!board[i+1][index+1].blackPlayer && board[i+1][index-1].blackPlayer && !board[i+1][index+1].border) {
        board[i][index].chosen = true;
        board[i+1][index+1].canMove = true;
      }
      if(!board[i+1][index-1].border && board[i+1][index+1].border && !board[i+1][index-1].blackPlayer)   {
        board[i][index].chosen = true;
        board[i+1][index-1].canMove = true;
      }
      if(!board[i+1][index-1].blackPlayer && board[i+1][index+1].blackPlayer && !board[i+1][index-1].border) {
        board[i][index].chosen = true;
        board[i+1][index-1].canMove = true;
      }
      
      
      
      this.setState({
        board: board
      })
      
    }
  }

  if(first) {
    if(board[i][index].whitePlayer) {
      board.map((blocks, i) => blocks.map(block => {
        if(block.canMove || block.chosen) {
          block.canMove = false;
          block.chosen = false;
        }
      }))
      if(!board[i-1][index+1].border && !board[i-1][index-1].border && !board[i-1][index+1].whitePlayer && !board[i-1][index-1].whitePlayer) {
        if(!board[i-1][index+1].blackPlayer) {
          board[i][index].chosen = true;
          board[i-1][index+1].canMove = true;
          
        }
        if(!board[i-1][index-1].blackPlayer) {
          board[i][index].chosen = true;
          board[i-1][index-1].canMove = true;
        }
        if(board[i-1][index+1].blackPlayer) {
          if(!board[i-2][index+2].whitePlayer && !board[i-2][index+2].border && !board[i-2][index+2].blackPlayer) {
            board[i][index].chosen = true;
            board[i-2][index+2].canMove = true;
          }
        }
        if(board[i-1][index-1].blackPlayer) {
          if(!board[i-2][index-2].whitePlayer && !board[i-2][index-2].border && !board[i-2][index-2].blackPlayer) {
            board[i][index].chosen = true;
            board[i-2][index-2].canMove = true;
          }
        }
      }
      if(!board[i-1][index+1].border && board[i-1][index-1].border && !board[i-1][index+1].whitePlayer)   {
        board[i][index].chosen = true;
        if(board[i-1][index+1].blackPlayer) {
          if(!board[i-2][index+2].blackPlayer && !board[i-2][index+2].whitePlayer && !board[i-2][index+2].border) {
            board[i-2][index+2].canMove = true;
          }
        } else {
          
          board[i-1][index+1].canMove = true;
        }
      }
      if(!board[i-1][index+1].whitePlayer && board[i-1][index-1].whitePlayer && !board[i-1][index+1].border) {
        board[i][index].chosen = true;
        board[i-1][index+1].canMove = true;
      }
      if(!board[i-1][index-1].border && board[i-1][index+1].border && !board[i-1][index-1].whitePlayer)   {
        board[i][index].chosen = true;
        if(board[i-1][index-1].blackPlayer) {
          if(!board[i-2][index-2].blackPlayer && !board[i-2][index-2].whitePlayer && !board[i-2][index-2].border) {
            board[i-2][index-2].canMove = true;
          }
        } else {
          
          board[i-1][index-1].canMove = true;
        }
        
      }
      if(!board[i-1][index-1].whitePlayer && board[i-1][index+1].whitePlayer && !board[i-1][index-1].border) {
        board[i][index].chosen = true;
        board[i-1][index-1].canMove = true;
      }
      
      
      
      
      this.setState({
        board: board
      })
      
    }
    
  }
    


    if(board[i][index].canMove) {
      board.map((blocks, i) => blocks.map(block => {
        if(block.canMove) {
          block.canMove = false;
          if(first) {
            board[i][index].whitePlayer = true;
            if(board[i+1][index-1].blackPlayer) {
              board[i+1][index-1].blackPlayer = false;
            }
            if(board[i+1][index+1].blackPlayer) {
              board[i+1][index+1].blackPlayer = false;
            }
            this.setState({
              board: board,
              first: false,
              second: true
            })
          } 
          else {
            board[i][index].blackPlayer = true;
            if(board[i-1][index-1].whitePlayer) {
              board[i-1][index-1].whitePlayer = false;
            } else {
            if(board[i-1][index+1].whitePlayer) {
              board[i-1][index+1].whitePlayer = false;
            }
          }
            this.setState({
              board: board,
              first: true,
              second: false
            })
          }
        }
        if(block.chosen) {
          block.blackPlayer = false;
          block.whitePlayer = false;
          block.chosen = false;
        } 
      })) 
      
    }

    this.setState({
      board: board,
    })
    
}


 


  render() {
      let { board } = this.state;
      
      return(
          <div className='game'>
        
        {           
            board.map(
              (blocks, i) =>
              <div key={i} className="row">
                  {
                    blocks.map(
                      (block, index) => {
                        return (
                        <div
                          key={index}
                          onClick={() => this.move(i, index)}
                          className={`cell${block.black ? ' black' : ''}
                                          ${block.white ? ' white' : ''}
                                          ${block.border ? ' border' : ''}
                                          ${block.blackPlayer && block.black ? ' blackPlayer' : ''}
                                          ${block.whitePlayer && block.black ? ' whitePlayer' : ''}
                                          ${block.blackPlayer && block.chosen ? ' chosenBlackPlayer' : ''}
                                          ${block.black && block.canMove ? ' chosenBlack' : ''}`}
                          />
                        )
                      }
                    )
                  }
                  
              </div>)
          }
                  
          </div>
      );
    }
  }