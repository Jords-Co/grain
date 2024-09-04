/**
 * Charts.
 * 
 * @author <cabal@digerati.design>
 */
export const charts = () => {
    if (!document.getElementById('myChart')) {
        return;
    }
    const data = {
        datasets: [{
            backgroundColor: [
                'rgb(0, 157, 224)',
                'rgb(230, 230, 230)'
            ],
            hoverBackgroundColor: [
                'rgb(0, 157, 224)',
                'rgb(230, 230, 230)'
            ],
            borderColor: [
                'rgb(0, 157, 224)',
                'rgb(230, 230, 230)'
            ],
            hoverBorderColor: [
                'rgb(0, 157, 224)',
                'rgb(230, 230, 230)'
            ],
            hoverBorder: 0,
            data: [
                3500,
                1500
            ],
            borderRadius: 1000,
        },],
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                },
            },
            circumference: 270,
            rotation: -135,
            animation: false,
            cutout: '85%',
            onHover: function (e) {
                const point = e.chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
                if (point.length && point[0].index === 0) {
                    e.native.target.style.cursor = 'grab';
                } else {
                    e.native.target.style.cursor = 'default';
                }
            },
            onClick: function (e) {
                /* Placeholder */
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                centerText: {},
                sliderButton: {},
            },
        },
    };
    const CREDIT_DETAILS = {
        150: {
            line: '150',
            deposit: 150,
            sign_up_fee: 5,
            credit_check: false,
            apr: 15,
        },
        /*
        400: {
          line: '400',
           deposit: 200,
           sign_up_fee: 25,
           credit_check: false,
           apr: 15,
        },
        */
        500: {
            line: '500',
            deposit: 500,
            sign_up_fee: 5,
            credit_check: false,
            apr: 15,
        },
        /*
        600: {
           line: '600',
           deposit: 252,
           sign_up_fee: 25,
           credit_check: false,
           apr: 15,
        },
        750: {
           line: '750',
           deposit: null,
           sign_up_fee: 56.25,
           credit_check: false,
           apr: 15,
        },
        1000: {
           line: '1,000',
           deposit: null,
           sign_up_fee: 75,
           credit_check: false,
           apr: 15,
        },
        */
        1500: {
            line: '1,500',
            deposit: 1500,
            sign_up_fee: 5,
            credit_check: false,
            apr: 15,
        },
        /*
        2000: {
           line: '2,000',
           deposit: null,
           sign_up_fee: 85,
           credit_check: true,
           apr: 19,
        },
        */
        2500: {
            line: '2,500',
            deposit: 2500,
            sign_up_fee: 5,
            credit_check: false,
            apr: 15,
        },
        /*
        3000: {
           line: '3,000',
           deposit: null,
           sign_up_fee: 85,
           credit_check: true,
           apr: 19,
        },
        */
        3500: {
            line: '3,500',
            deposit: 3500,
            sign_up_fee: 5,
            credit_check: false,
            apr: 15,
        },
        /*
        4000: {
           line: '4,000',
           deposit: null,
           sign_up_fee: 85,
           credit_check: true,
           apr: 19,
        },
        */
        5000: {
            line: '5,000',
            deposit: 5000,
            sign_up_fee: 5,
            credit_check: false,
            apr: 15,
        },
    };
    /**
     * Get Credit from Percentage.          
     */
    function getCreditFromPercentage(percentage) {
        if (percentage === 100) {
            return 5000;
        }
        if (percentage >= 70) {
            return 3500;
        }
        if (percentage >= 50) {
            return 2500;
        }
        if (percentage >= 30) {
            return 1500;
        }
        if (percentage >= 10) {
            return 500;
        }
        return 150
    }
    let element, scale, datasetIndex, index, value, degrees, myChart, activePoint;
    let percentage = 70;
    let creditLine = 3500;
    /**
     * Get Coordinates.
     */
    const getCoordinates = (theta, radius) => {
        const radians = (theta * Math.PI) / 180
        return {
            x: radius * Math.cos(radians),
            y: radius * Math.sin(radians)
        }
    };
    Chart.register({
        id: 'centerText',
        afterDraw: function (chart, args, options) {
            const {
                ctx,
                chartArea: {
                    left,
                    top,
                    height,
                    width,
                    bottom,
                    right
                },
            } = chart;
            ctx.save();
        },
    }, {
        id: 'sliderButton',
        afterDraw: function (chart, args, options) {
            const {
                ctx,
                data
            } = chart;
            const movingData = data.datasets[0].data[0];
            const total = movingData + data.datasets[0].data[1];
            const coords = getCoordinates((movingData / total) * 270 + 130, 120);
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.arc(
                Math.floor(coords.x) + 150,
                Math.floor(coords.y) + 145 + 20,
                16,
                0,
                2 * Math.PI
            );
            ctx.lineWidth = 6;
            /* Primary */
            ctx.strokeStyle = 'rgb(0, 157, 224)';
            /* Shadow */
            ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
            ctx.shadowOffsetY = 20;
            ctx.shadowBlur = 30;
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.shadowColor = null;
            ctx.shadowOffsetY = null;
            ctx.shadowBlur = null;
        },
    });
    myChart = new Chart(document.getElementById('myChart'), config);
    /* Init */
    d3.select(myChart.canvas).call(
        d3
            .drag()
            .container(myChart.canvas)
            .on('start', getActivePoint)
            .on('drag', updateData)
            .on('end', callback)
    );
    setCreditDetails();
    updateCreditLine();
    /**
     * Get Active Point.
     */
    function getActivePoint(event, d) {
        activePoint = myChart._active[0];
    }
    /**
     * Get Degrees.
     */
    function getDegrees(cx, cy) {
        const {
            chartArea: {
                bottom,
                left,
                right,
                height,
                width
            },
        } = myChart;
        let radians = Math.atan2(cy - bottom / 2, cx - right / 2) - Math.atan2(bottom - bottom / 2, left - right / 2);
        /* Radians -> degrees formula */
        degrees = Math.floor(radians * (180 / Math.PI));
        /* 
         * So the blue draggable part doesn't get so small
         * you can't drag it && doesn't jump to being full
         */
        if (degrees < 10 && degrees >= -45) {
            degrees = 10;
        } else if (degrees < 0) {
            degrees = degrees + 360;
        }
        degrees = degrees > 270 ? 270 : degrees;
        return degrees;
    }
    /**
     * Update Date.
     */
    function updateData(event, d) {
        datasetIndex = activePoint?.datasetIndex;
        index = activePoint?.index || 0;
        const total = myChart.data.datasets[0].data[0] + myChart.data.datasets[0].data[1];
        if (index != 0) {
            return;
        }

        degrees = getDegrees(event.x, event.y);
        percentage = Math.ceil((degrees / 270) * 100);
        setCreditDetails();
        updateCreditLine();
        const updatedValue = total * (degrees / 270);
        myChart.data.datasets[datasetIndex].data[index] = updatedValue;
        myChart.data.datasets[datasetIndex].data[index + 1] = total - updatedValue;
        myChart.update(0);
    }
    /**
     * Set Credit Details.
     */
    function setCreditDetails() {
        creditLine = getCreditFromPercentage(percentage);
        const {
            line,
            deposit,
            sign_up_fee,
            credit_check,
            apr
        } = CREDIT_DETAILS[creditLine];
        document.getElementById('security-deposit').innerHTML = deposit ? '$' + deposit.toLocaleString('en-US') + ' over 4 Months' : 'None';
        document.getElementById('sign-up-fee').innerHTML = sign_up_fee ? '$' + sign_up_fee : 'None';
        document.getElementById('credit-check').innerHTML = !!credit_check ? 'Credit Check Required' : 'No Credit Check';
        document.getElementById('credit-check-sub').innerHTML = !!credit_check ? 'Soft and hard credit inquiry' : 'Offer based solely on cash flow';
        document.getElementById('apr').innerHTML = apr + '% APR';
        document.getElementById('service-fee').innerHTML = '$3/Month';
    }
    /**
     * Callback.
     */
    function callback() {
        /* console.log('The new value is: ' + myChart.data.datasets[0].data); */
    }
    /**
     * Update Credit Line.
     */
    function updateCreditLine() {
        const mobileCLNumber = document.getElementById('cl-number');
        mobileCLNumber.innerText = '$' + creditLine.toLocaleString('en-US');
    }
    /**
     * Set Mobile HTML Date.
     */
    function setMobileHtmlData() {
        const newValue = CREDIT_DETAIL_KEYS[CREDIT_DETAIL_COUNT];
        const {
            deposit,
            sign_up_fee,
            credit_check,
            apr
        } = CREDIT_DETAILS[newValue];
        document.getElementById('security-deposit').innerHTML = deposit ? '$' + deposit.toLocaleString('en-US') + ' over 3 Months' : 'None';
        document.getElementById('sign-up-fee').innerHTML = sign_up_fee ? '$' + sign_up_fee : 'None';
        document.getElementById('credit-check').innerHTML = !!credit_check ? 'Credit Check Required' : 'No Credit Check';
        document.getElementById('credit-check-sub').innerHTML = !!credit_check ? 'Soft and hard credit inquiry' : 'Offer based solely on cash flow';
        document.getElementById('apr').innerHTML = apr + '% APR';
        document.getElementById('service-fee').innerHTML = '$3/Month';
    }
    /* Credit Details */
    let CREDIT_DETAIL_KEYS = Object.keys(CREDIT_DETAILS)
    /* Initial value and starting point based off off credit_details keys */
    let CREDIT_DETAIL_COUNT = 4;
    /**
     * Calc Minus.
     */
    function calcMinus() {
        if (CREDIT_DETAIL_COUNT > 0) {
            CREDIT_DETAIL_COUNT -= 1;
            const newValue = CREDIT_DETAIL_KEYS[CREDIT_DETAIL_COUNT];
            creditLine = Number(newValue);
            setMobileHtmlData(Number(newValue));
            updateCreditLine();
        }
    }
    /**
     * Calc Plus.
     */
    function calcPlus() {
        if (CREDIT_DETAIL_COUNT < CREDIT_DETAIL_KEYS.length - 1) {
            CREDIT_DETAIL_COUNT += 1;
            const newValue = CREDIT_DETAIL_KEYS[CREDIT_DETAIL_COUNT];
            creditLine = Number(newValue);
            setMobileHtmlData(Number(newValue));
            updateCreditLine();
        }
    }
    document.getElementById('calc-minus').addEventListener('click', calcMinus);
    document.getElementById('calc-plus').addEventListener('click', calcPlus);
};