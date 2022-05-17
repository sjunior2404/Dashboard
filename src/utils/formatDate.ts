const formatDate = (date: string):string =>{
    const dateFormatted = new Date(date)


    const day = dateFormatted.getDate() > 9 
    ? dateFormatted.getDate() :  `0${dateFormatted.getDate()}`;
    //Mês começa a contar do 0, por isso +1
    const month = dateFormatted.getMonth() + 1 > 9 
    ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() +1}`;

    const year = dateFormatted.getFullYear(); 

    //interpolação de string
    return `${day}/${month}/${year}`;
};

export default formatDate;