package com.t2.individual.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/Calculo")
public class MainController {
    @RequestMapping("/")
    public String inicio(){
        return "index";
    }

    @RequestMapping("/resultado/{nombre}/{cantidadProd}/{precioUni}/{hayCupon}/{udCupon}/{factura}")
    public String evaluar(
        @PathVariable Float precioUni,
        @PathVariable int cantidadProd,
        @PathVariable Boolean hayCupon,
        @PathVariable int udCupon,
        @PathVariable Boolean factura,
        @PathVariable String nombre,
        Model model)
    {

        double montoDesct=0;
        double montoFactura=0;
        double montoVentaBruta=0;
        double total;
        int porcDesct=0;


        montoVentaBruta = cantidadProd * precioUni;

        if(hayCupon == true){
            if(udCupon%2==0) {
                montoDesct = montoVentaBruta * 0.10;
                porcDesct=10;
            }
            else {
                montoDesct = montoVentaBruta * 0.5;
                porcDesct=5;
            }
        }else {
            montoDesct = 0;
            porcDesct = 0;
        }
            
        if(factura == true )montoFactura = montoVentaBruta * 0.18;
        else montoFactura = 0;

        total = montoVentaBruta - montoDesct + montoFactura;

        model.addAttribute("nombre", nombre);
        model.addAttribute("ventaB", montoVentaBruta);
        model.addAttribute("desCupon", montoDesct);
        model.addAttribute("porcDesct", porcDesct);
        model.addAttribute("factura", montoFactura);
        model.addAttribute("total", total);
        
        return "resultado";
    }
    
}
