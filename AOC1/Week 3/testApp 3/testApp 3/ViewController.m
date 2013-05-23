//
//  ViewController.m
//  testApp 3
//
//  Created by Jeff Mitsou on 5/22/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

//Add Function: adds two int(s) together and returns a value
-(int)add:(NSInteger)numOne secAdd:(NSInteger)numTwo
{
    return (numOne + numTwo);
}

//Compare Function: that takes two NSInteger values. Return YES or NO based on whether the values are equal.
-(BOOL)compare:(NSInteger)valOne compTwo:(NSInteger)valTwo
{
    
    if (valOne == valTwo){
        return YES;
    }
    else {
        return NO;
    }
}

//Create a function called Append. This function will take two NSStrings and return a new NSString containing the appended strings using an NSMutableString and the Append method.
 
//Call the Append function with two NSStrings. Capture the result and display a UIAlertView with the appended string using displayAlertWithString.
 
//Create a function called DisplayAlertWithString. This function will take as a parameter an NSString.
 
//Call the Add function passing in two integer values. Capture the return of this function into a variable.
 
//Bundle the returned integer into an NSNumber and then convert it to a NSString and pass it to the DisplayAlertWithString function.
 
//Give it some text for the title. The message will read, "The number is 00". Replace the 00 with the integer passed into the function.
 
//Call the Compare function with two integer values. If Compare returns YES, display an UIAlertView both with the input values and the result using the DisplayAlertWithString function

//DisplayAlertWithString Function

//Take the passed in NSString and display it in the alert view
 
//Create an UIAlertView

- (void)viewDidLoad
{
    //call for ADD function
    int addSum = [self add:2 secAdd:3];
    NSLog(@"it is working %d times",addSum);
    
    //call for Compare Function
    BOOL valSum = [self compare:5 compTwo:5];
    NSLog(@"Is the sky blue %@",valSum ?  @"YES" :@"NO");
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
