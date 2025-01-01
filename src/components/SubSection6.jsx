import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function SubSection6() {
    return (
        <div className='flex items-center justify-center flex-col w-[1080px]  pt-20 text-start'>
            <Button
                variant="outlined"
                sx={{
                    borderRadius: "60px", // Equivalent to rounded-full
                    paddingX: 6,           // px-6 translates to paddingX: 6
                    marginY: 10
                }}
            >
                FAQs
            </Button>

            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:<br />
                    - Natural Language Processing to interpret resumes and candidate responses
                    <br />- Adaptive Learning to improve accuracy and efficiency over time
                    <br />- Task Automation to handle repetitive or time-consuming steps
                    - Data-Driven Insights for better predictions and decisions
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:<br />
                    - Natural Language Processing to interpret resumes and candidate responses
                    <br />- Adaptive Learning to improve accuracy and efficiency over time
                    <br />- Task Automation to handle repetitive or time-consuming steps
                    - Data-Driven Insights for better predictions and decisions
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:<br />
                    - Natural Language Processing to interpret resumes and candidate responses
                    <br />- Adaptive Learning to improve accuracy and efficiency over time
                    <br />- Task Automation to handle repetitive or time-consuming steps
                    - Data-Driven Insights for better predictions and decisions
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
