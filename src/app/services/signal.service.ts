import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  http = inject(HttpClient);
  resources = signal<any>([]);

  protected setResources = (resources: any) => {
    this.resources.set(resources);
  };

  protected upsertResource = (resource: any) => {
    const index = this.resources().findIndex((todo: any) => todo.id === resource.id);
    if (index === -1) {
      this.resources.set([...this.resources(), resource]);
      return;
    }
    this.resources.update((resources) => (resources[index] = resource));
  };

  protected removeResource = (id: number) => {
    this.resources.set(
      this.resources().filter((resource: { id: number; }) => resource.id !== id)
    );
  };

}
