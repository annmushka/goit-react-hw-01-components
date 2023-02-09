import styled from '@emotion/styled';

export const ListItem=styled.li` 
width: 150px;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2),
0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Avatar=styled.img` width: 50px;
object-fit: cover;
`;

export const Name=styled.p` font-size: 16px;
font-weight: 500;
`;
export const Status=styled.span` width: 15px;
height: 15px;
background-color: ${({ isOnline })=>(isOnline ? 'green' : 'red')
}

;
border-radius: 50%;
`;