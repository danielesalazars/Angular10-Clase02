import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FilesizePipe implements PipeTransform {
  transform(size: number, ...args: unknown[]): string {
    //debugger;
    return `${size} MB`;
  }
}
