import React, {useMemo, useState, useEffect} from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import FormatCurrency from '../../utils/formatCurrency';
import FormatDate from '../../utils/formatDate';


import { Container, Content, Filters } from "./styles";

interface IRouteParams{
    match:{
        params:{
            type:string;
        }
    }
}

interface IData{
    id:string;
    description:string | boolean;
    amountFormatted:string;
    frequency:string;
    dataFormatted:string;
    tagColor:string;

}

const List: React.FC<IRouteParams> = ({ match }) =>{

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<number>(String(new Date().getFullYear()));

    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    }, [type])

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [type])


    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[type])

    const months = [
        {value:'7', label:"Julho"},
        {value:'8', label:"Agosto"},
        {value:'9', label:"Setembro"}
    ];

    const years = [        
        {value:2020, label:2020},
        {value:2019, label:2019},
        {value:2018, label:2018}
    ];

    useEffect(() => {
        const filteredData = listData.map(item => {

            const date = new Date(item.date);
            const month = String (date.getMonth() + 1);
            const year = String (date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedData = filteredData.map(item => {
            return {
                description: item.description,
                amountFormatted: FormatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: FormatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });
        setData(formattedData); 
    }, []);
    return(
        <Container>
            <ContentHeader title={title} lineColor={ lineColor }>
                    <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                    <SelectInput options={years} onChange = {(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/> 

            </ContentHeader>
            <Filters>
                <button 
                type="button"
                className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button 
                type="button"
                className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>
            <Content>
                {
                data.map(item => (    
                <HistoryFinanceCard
                    key={item.id}
                    tagColor = {item.tagColor}
                    title={item.description}
                    subtitle={item.dataFormatted}
                    amount={item.amountFormatted}
                />
                ))
            }
            </Content>
        </Container>
    )
}

export default List;