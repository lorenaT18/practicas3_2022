//funciones tradicionales
function calcular()
{
 const d1= document.getElementById("inp_d1").value
 const d2= document.getElementById("inp_d2").value
 const operacion= document.getElementById("slt_operacion").value
 let resultado=null
            if (operacion==0) //calculo corriente
            {
              resultado=d1/d2
            }
            else{
                if(operacion==1)
                { //calculo tension
                 resultado= d1*d2     
                }
                else //calculo resistencia
                {resultado=d1/d2
                }
            }
    document.getElementById("h_resultado").textContent = 'Resultado='+resultado.toFixed(2)
        }

function setearLabel()
{
     alert('Probando')
    const operacion= document.getElementById("slt_operacion").value
    if(operacion==0)
    {
        document.getElementById("lb_1").textContent='Tensión'
        Document.getElementById("lb_2").textContent='Resistencia'
    }
    else
    {
        if(operacion==1)
        {
            document.getElementById("lb_1").textContent='Corriente'
            Document.getElementById("lb_2").textContent='Resistencia'

        }
        else{
            document.getElementById("lb_1").textContent='Tensión'
            Document.getElementById("lb_2").textContent='Corriente'

        }
    }
}