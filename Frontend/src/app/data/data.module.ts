import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearDoubleLinkedListComponent } from './linear-double-linked-list/linear-double-linked-list.component';
import { DoubleLinkedCircularListComponent } from './double-linked-circular-list/double-linked-circular-list.component';
import { QueueComponent } from './queue/queue.component';
import { StackComponent } from './stack/stack.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';
import { GraphsComponent } from './graphs/graphs.component';
import { DatabaseComponent } from './database/database.component';
import { SimplyLinkedLinearListComponent } from './simply-linked-linear-list/simply-linked-linear-list.component';
import { SimplyLinkedCircularListComponent } from './simply-linked-circular-list/simply-linked-circular-list.component';

@NgModule({
  declarations: [
    LinearDoubleLinkedListComponent,
    DoubleLinkedCircularListComponent,
    QueueComponent,
    StackComponent,
    BinaryTreeComponent,
    GraphsComponent,
    DatabaseComponent,
    SimplyLinkedLinearListComponent,
    SimplyLinkedCircularListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinearDoubleLinkedListComponent,
    DoubleLinkedCircularListComponent,
    QueueComponent,
    StackComponent,
    BinaryTreeComponent,
    GraphsComponent,
    DatabaseComponent,
    SimplyLinkedLinearListComponent,
    SimplyLinkedCircularListComponent
  ]
})

export class DataModule { }
