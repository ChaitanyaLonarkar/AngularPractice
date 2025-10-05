import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tepmforms',
  imports: [],
  templateUrl: './tepmforms.html',
  styleUrl: './tepmforms.css'
})
export class Tepmforms {
addElement:string='';
addItem(){
  // alert("Add item");
  this.addElement='<>p>New Element</p>';
}

htmlContent: SafeHtml; // Declare the type as SafeHtml

      constructor(private sanitizer: DomSanitizer) {
        const rawHtml = '<p>This is <strong>dynamic</strong> HTML.</p><script>alert("XSS attempt!");</script'; // Example raw HTML
        // Sanitize the HTML to prevent XSS vulnerabilities
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
      }
removeItem(){
  alert("Remove item"); 
}
}
