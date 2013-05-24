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

//Compare Function: takes two NSInteger values. Return YES or NO based on whether the values are equal.
-(BOOL)compare:(NSInteger)valOne compTwo:(NSInteger)valTwo
{
    
    if (valOne == valTwo){
        return YES;
    }
    else {
        return NO;
    }
}

//Append Function: This function will take two Strings and return a new NSString containing the appended strings using an NSMutableString and the Append method.
-(NSString*)append:(NSString*)thingOne secApp:(NSString*)thingTwo
{
    NSMutableString *newString = [[NSMutableString alloc] initWithString:thingOne];
    NSString *jointString = [newString stringByAppendingString:thingTwo];
    return jointString;
}

//Create a function called DisplayAlertWithString. This function will take as a parameter an NSString.
-(void)displayAlertWithString:(NSString*)msgString
{
    //Create an UIAlertView
    UIAlertView* msgView = [[UIAlertView alloc] initWithTitle:@"Alert" message: msgString delegate:nil cancelButtonTitle:@"done" otherButtonTitles:nil];
    if (msgView !=nil) {
        [msgView show];
    }
    
}
 
//Bundle the returned integer into an NSNumber and then convert it to a NSString and pass it to the DisplayAlertWithString function.


- (void)viewDidLoad
{
    //call for ADD function
    int addSum = [self add:2 secAdd:3];
    NSLog(@"it is working %d times",addSum);
    
    //NSNumber* numb = addSum;
    
    //Give it some text for the title. The message will read, "The number is 00". Replace the 00 with the integer passed into the function.
    NSString* sumString = [NSString stringWithFormat:@"The number is %d",addSum];
    [self displayAlertWithString:sumString];
    
    //call for Compare Function
    int comX = 5;
    int comY = 5;
    BOOL valSum = [self compare:comX compTwo:comY];
    NSLog(@"Is the sky blue %@",valSum ?  @"YES" :@"NO");
    
    //Call the Compare function with two integer values. If Compare returns YES, display an UIAlertView both with the input values and the result using the DisplayAlertWithString function
    NSString* compString;
    if (valSum == YES) {
        compString = [NSString stringWithFormat:@"%@, the values %i and %i are equal",valSum ? @"YES":@"NO",comX,comY];
    }
    else if (valSum == NO){
        compString = [NSString stringWithFormat:@"%@, the values %i and %i are not equal",valSum ? @"YES":@"NO",comX,comY];
    }
        
    [self displayAlertWithString:compString];
    
    //call for Append Function
    NSString *stringValue =[self append:@"The first part" secApp:@" and second part"];
    NSLog(@"%@",stringValue);
    
    [self displayAlertWithString:stringValue];
   
    
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
