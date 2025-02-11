import { Injectable, signal } from '@angular/core';
import { Iingresos } from '../interfaces/iingresos';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private static ingresos = signal<Iingresos[]>([]);

    constructor() { }

    getIngresos():Iingresos[]{
      return DbService.ingresos();
    }

    agregarIngreso(ingreso:Iingresos){
      const id = DbService.ingresos().length ? (Math.max(...DbService.ingresos().map(i=> parseInt(i.id)))+1).toString():"1";
      const aux = {...ingreso,id};
      const aux2 = [...DbService.ingresos(),aux];
      DbService.ingresos.set(aux2);
    }

    eliminar(id:string){
      const aux = DbService.ingresos().filter(i=>i.id!==id);
      DbService.ingresos.set(aux);
    }
    actualizarIngreso(ingreso:Iingresos){
      const aux = DbService.ingresos().map((ing)=>ing.id==ingreso.id ? ingreso : ing);
      DbService.ingresos.set(aux);
    }


}