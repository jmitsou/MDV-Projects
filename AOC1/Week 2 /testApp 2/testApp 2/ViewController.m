//
//  ViewController.m
//  testApp 2
//
//  Created by Jeff Mitsou on 5/16/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    //Title Lable for book
    bookTitle = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 0.0f, 320.0f, 20.0f)];
    
    if (bookTitle !=nil) {
        bookTitle.backgroundColor = [UIColor colorWithRed:0.365 green:0.055 blue:0.035 alpha:1] /*#5d0e09*/;
        bookTitle.text = @"Catching Fire";
        bookTitle.textAlignment = NSTextAlignmentCenter;
        bookTitle.textColor = [UIColor whiteColor];
    }
    [self.view addSubview:bookTitle];
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
