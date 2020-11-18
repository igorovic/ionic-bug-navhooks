import { Component, h } from '@stencil/core';

const enterGuard = () =>{
  console.log('You shall not pass!');
  return false;
}

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" beforeEnter={enterGuard} />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
