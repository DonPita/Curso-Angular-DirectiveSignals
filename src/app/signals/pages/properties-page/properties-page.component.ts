import { Component, computed, effect, signal, inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})

export class PropertiesPageComponent implements OnInit {

  public counter = signal(10);

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  })

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);

  //Los efectos se autodestruyen solos
  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`)
  });

  ngOnInit(): void {
    //Para comprobar que  que el efecto se autoelimina al cambiar de pantalla.
    setInterval(() => {
      this.counter.update(current => current + 1);
    }, 1000)
  }

  onFieldUpdated(field: keyof User, value: string) {

    this.user.update(current => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }

      return { ...current }; //Referencia al objeto original
    })
  }

  increaseBy(value: number) {
    this.counter.update(current => current + value);
  }
}
