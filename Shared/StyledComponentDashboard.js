import styled from 'styled-components';

export const MainWrapper = styled.div`
  .topHeader {
    background-color: #226ba7;
    padding: 16px 20px;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    span {
      font-size: 15px;
      cursor: pointer;
    }
    @media (max-width: 767px){
      margin-bottom: 20px;
    }
  }
  .dashboard {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 20px;
    gap: 25px;
    .leftSide {
      width: 250px;
      background-color: #226ba7;
      ul{
        margin: 0px;
        padding: 0px;
        list-style: none;
        li{
          border-bottom: solid 1px #418dc1;
          cursor: pointer;
          a{
            color: #fff;
            padding: 12px 19px;
            display: flex;
            &:hover{
              background-color: #fff;
              color: #226ba7;
            }
          }
        }
      }
    }
    .Rightside {
      width: 100%;
      background-color: #e6e6e6;
      padding: 20px;
      h2{
        margin-top: 4px;
      }
      img{
        float: left;
        width: 320px;
        margin-right: 25px;
        margin-bottom: 5px;
      }
    }
    @media (max-width: 767px){
      padding: 0px 15px;
      flex-wrap: wrap;
      .leftSide{
        max-width: 100%;
        width: 100%;
      }
      .Rightside{
        img{
          max-width: 100%;
          margin-bottom: 16px;
        }
      }
    }
  }
`;
