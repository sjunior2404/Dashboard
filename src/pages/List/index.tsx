import React, {useMemo, useState, useEffect} from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import FormatCurrency from '../../utils/formatCurrency';
import FormatDate from '../../utils/formatDate';


import { Container, Content, Filters } from "./styles";

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id:string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const movimentType = match.params.type;

    const pageData = useMemo(() => {
        return movimentType === 'entry-balance' ?
            {
                title: 'Entradas',
                lineColor: '#4E41F0',
                data: gains
            }
            :       
            {
                title: 'Saídas',
                lineColor: '#E44C4E',
                data: expenses
            }       
    },[movimentType]);

    const lineColor = useMemo(() => {
        return movimentType === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [movimentType]);


    const listData = useMemo(() => {
        return movimentType === 'entry-balance' ? gains : expenses;
    },[movimentType]);

    const months = [
        {value:'7', label:"Julho"},
        {value:'8', label:"Agosto"},
        {value:'9', label:"Setembro"}
    ];

    const years = [        
        {value:2022, label:2022},
        {value:2019, label:2019},
        {value:2018, label:2018}
    ];

    useEffect(() => {
       const response = listData.map(item => {
            return {
                id:String(Math.random() * data.length),
                description: item.description,
                amountFormatted: FormatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted:FormatDate(item.date),
                tagColor:item.frequency === 'recorrente'?'#4E41f0' : '#E44C4E'
            }
        })
        
        setData(response);
    },[]); 
    return(
        <Container>
            <ContentHeader title={pageData.title} lineColor={ lineColor }>
                    <SelectInput options={months} onChange={(e)=> console.log(e.target.value)} />
                    <SelectInput options={years}onChange={(e)=> console.log(e.target.value)} /> 

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
                        key = {item.id}
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