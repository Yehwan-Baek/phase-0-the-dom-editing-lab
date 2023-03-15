window.onload = () => {
    let heading = document.createElement("h1");
    heading.innerHTML = "Hi, I\'m Yehwan";
   
    let par = document.createElement("p");
    par.innerHTML = "I am writing HTML in my <strong>browser</strong>. <em>Neat</em>!";

    let link = document.createElement("a");
    link.href = "https://developer.mozilla.org/en-US/docs/Web/HTML";
    link.innerHTML = "this link"
    par.appendChild(link);

    document.body.appendChild(heading);
    document.body.appendChild(par);
    
    // let table = document.createElement("table")
    //     let thead = document.createElement("thead")       
    //         let trForHead = document.createElement("tr")
    //             let th1 = document.createElement("th")
    //             th1.innerHTML = "Elemnet Name";
    //             trForHead.appendChild(th1)

    //             let th2 = document.createElement("th")
    //             th2.innerHTML = "Display Value";
    //             trForHead.appendChild(th2)
    //         thead.appendChild(trForHead);
    //     table.appendChild(thead);

    //     let tbody = document.createElement("tbody");
    //         let tr1 = document.createElement("tr");
    //         tbody.appendChild(tr1);
    //         let tr2 = document.createElement("tr");
    //         tbody.appendChild(tr2);
    //         let tr3 = document.createElement("tr");
    //         tbody.appendChild(tr3);
    //         let tr4 = document.createElement("tr");
    //         tbody.appendChild(tr4);
    //     table.appendChild(tbody);
    // document.body.appendChild(table);

    let table = document.createElement("table")    
    //thead
    let thead = document.createElement("thead")
        let thr = document.createElement("tr")
            let th1 = document.createElement("th")
            th1.innerHTML = "Element name";
            let th2 = document.createElement("th")
            th2.innerHTML = "Display value";
            thr.appendChild(th1);
            thr.appendChild(th2)
    //tbody
    let tbody = document.createElement("tbody")

    //array of data
        const data =[
            {element:"h1",displayValue:"block"},
            {element:"block",displayValue:"block"},
            {element:"strong",displayValue:"inline"},
            {element:"em",displayValue:"inline"}
        ]
        for (const {element,displayValue} of data){
            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = element;
            let td2 = document.createElement("td");
            td2.innerHTML = displayValue;
            row.appendChild(td1);
            row.appendChild(td2);
            tbody.appendChild(row)
        }
    table.appendChild(thead)
    table.appendChild(tbody)
    document.body.appendChild(table)    
} 